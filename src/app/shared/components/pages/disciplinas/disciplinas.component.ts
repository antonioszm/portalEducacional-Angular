import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../../../services/disciplinas.service';
import { CursoService } from '../../../services/curso.service';
import { AlunoService } from '../../../services/aluno.service';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule,MatCardModule, HeaderComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent implements OnInit{
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
