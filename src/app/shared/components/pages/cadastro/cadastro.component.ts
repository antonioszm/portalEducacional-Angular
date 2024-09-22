import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  alunoForm!: FormGroup;
  alunoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.alunoForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      senha: ['', Validators.required],
      curso: ['', Validators.required]
    });

    this.alunoId = this.route.snapshot.paramMap.get('id');
    if (this.alunoId) {
      this.carregarAluno(this.alunoId);
    }
  }

  carregarAluno(id: string): void {
    this.alunoService.getAlunoById(id).subscribe((aluno) => {
      this.alunoForm.patchValue({
        nomeCompleto: aluno.nomeCompleto,
        cpf: aluno.cpf,
        email: aluno.email,
        celular: aluno.celular,
        senha: aluno.senha,
        curso: aluno.curso
      });
    });
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      if (this.alunoId) {
        this.alunoService.updateAluno(this.alunoId, this.alunoForm.value).subscribe(() => {
          alert('Aluno atualizado com sucesso!');
        });
      } else {
        this.alunoService.postAluno(this.alunoForm.value).subscribe(() => {
          alert('Aluno criado com sucesso!');
        });
      }
    }
  }
}
