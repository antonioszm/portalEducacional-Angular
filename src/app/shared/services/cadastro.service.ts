import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/user';

  salvarUsuario(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
