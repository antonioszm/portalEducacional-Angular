import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`) 
      .pipe(
        map(users => {
          const user = users[0];
          if (user && user.senha === senha) {
            localStorage.setItem('usuariologado', JSON.stringify(users[0]));
            console.log("logado")
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
    }
    logout() {
      localStorage.removeItem('usuariologado');
      this.router.navigate(['/login']);
    }
  
    loginValido(): boolean {
      return !!localStorage.getItem('usuariologado');
    }
}
