import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/pages/home/home.component';
import { AlunosComponent } from './shared/components/pages/alunos/alunos.component';
import { LoginComponent } from './shared/components/pages/login/login.component';
import { CadastroComponent } from './shared/components/pages/cadastro/cadastro.component';
import { DisciplinasComponent } from './shared/components/pages/disciplinas/disciplinas.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "alunos",
        component: AlunosComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "disciplinas",
        component: DisciplinasComponent
    }
];
