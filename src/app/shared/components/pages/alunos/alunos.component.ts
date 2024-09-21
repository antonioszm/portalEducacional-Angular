import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent implements OnInit {
  alunos: any[] = []; 
  termoBusca: string = ''; 

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.getAlunos().subscribe((data: any[]) => {
      this.alunos = data;
    });
  }

  pesquisar(): void {
    if (this.termoBusca) {
      this.alunoService.getAlunoByEmailOuNome(this.termoBusca).subscribe((data: any[]) => {
        this.alunos = data;
      });
    } else {
      this.carregarAlunos();
    }
  }

  editarAluno(id: string): void {
    this.router.navigate([`/cadastro/${id}`]); 
  }

  // Exclui o aluno
  excluirAluno(id: string): void {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.alunoService.deleteAluno(id).subscribe(() => {
        alert('Aluno excluído com sucesso!');
        this.carregarAlunos(); 
      });
    }
  }
}
