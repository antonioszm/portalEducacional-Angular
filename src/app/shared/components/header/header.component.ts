import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ToolbarModule } from 'primeng/toolbar';

 @Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MatToolbarModule, CommonModule, ToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nomeUsuario: string | null = '';
  showLogout = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.obterNomeUsuario();
  }
  obterNomeUsuario(): void {
    const usuarioLogado = localStorage.getItem('usuariologado');
    if (usuarioLogado) {
        const aluno = JSON.parse(usuarioLogado);
        this.nomeUsuario = aluno.nomeCompleto;
    }
  }
  toggleLogout(): void {
    this.showLogout = !this.showLogout;
  }
  deslogar(){
    this.authService.logout()
  }
}
