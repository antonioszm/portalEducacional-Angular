import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  aluno = JSON.parse(localStorage.getItem('aluno') || '{}');
  cursoId = this.aluno.curso;
  private dadosCursos = {
    cursos: [
      {
        id: "cursoA",
        nome: "Java",
        semestres: [
          { semestre: 1, disciplinas: ["JavaI", "JavaII"] },
          { semestre: 2, disciplinas: ["JData", "JSecurity"] }
        ]
      },
      {
        id: 'cursoB',
        nome: 'Angular',
        semestres: [
          { semestre: 1, disciplinas: ["HTML", "SCSS"] },
          { semestre: 2, disciplinas: ["TS", "ANGULAR"] }
        ]
      }
    ]
  };

  getDisciplinasPorCurso(cursoId: string) {
    const curso = this.dadosCursos.cursos.find(c => c.id === cursoId);
    return curso ? curso.semestres : [];
  }
}
