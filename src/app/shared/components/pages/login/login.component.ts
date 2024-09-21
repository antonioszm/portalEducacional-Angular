import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  verificarLogin() {
    this.authService.login(this.email, this.senha).subscribe(valido => {
      if (valido) {
        this.router.navigate(['/home']);
      }
    });
  }
}
