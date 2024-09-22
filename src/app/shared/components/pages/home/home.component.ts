import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AlunoService } from '../../../services/aluno.service';
import { CursoService } from '../../../services/curso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  disciplinasPorSemestre: any[] = [];
  aluno: any;

  constructor(private alunoService: AlunoService, private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obterDadosAluno()
  }
  obterDadosAluno() {
    const alunoLS = JSON.parse(localStorage.getItem('usuariologado') || '{}');
    const alunoId = alunoLS.id;
    this.alunoService.getAlunoById(alunoId).subscribe(aluno => {
      this.aluno = alunoLS;
      this.organizarDisciplinasPorSemestre(aluno.curso.id);
    });
  }
  organizarDisciplinasPorSemestre(cursoId: string) {
    this.cursoService.getCursos().subscribe(cursos => {
      const curso = cursos.find((c: { id: string; }) => c.id === cursoId);
      if (curso) {
        this.disciplinasPorSemestre = curso.semestres.map((semestre: { semestre: any; disciplinas: any; }) => ({
          semestre: semestre.semestre,
          disciplinas: semestre.disciplinas
        }));
      }
    });
  }
}