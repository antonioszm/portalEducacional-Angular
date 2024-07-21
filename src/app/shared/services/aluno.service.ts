import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/user'; 
  
  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAlunoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAluno(id: string, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aluno);
  }
}
