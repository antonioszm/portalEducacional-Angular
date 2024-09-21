import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/users'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  postAluno(aluno: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, aluno, this.httpOptions);
  }
  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAlunoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAlunoByEmail(email: string): Observable<any[]> {
    const url = `${this.apiUrl}?email=${email}`;
    return this.http.get<any[]>(url);
  }
  getAlunoByNome(nome: string): Observable<any[]> {
    const url = `${this.apiUrl}?nome=${nome}`;
    return this.http.get<any[]>(url);
  }
  getAlunoByEmailOuNome(termo: string): Observable<any[]> {
    const url = `${this.apiUrl}?email=${termo}`;
    if (this.http.get<any[]>(url)){
      return this.http.get<any[]>(url)
    } else {
      const url = `${this.apiUrl}?nome=${termo}`;
      return this.http.get<any[]>(url)
    }
  }
  updateAluno(id: string, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aluno);
  }
}
