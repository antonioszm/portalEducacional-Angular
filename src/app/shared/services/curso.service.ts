import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/cursos'; 

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCursoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
