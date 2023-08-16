import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
    { 
      path: 'cursos', 
      loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
      canActivate: [AuthGuard]
    },
    { 
      path: 'alunos', 
      loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
      canActivate: [AuthGuard]
    },
    {path: 'login', component: LoginComponent},
    {
      path: '', 
      component: HomeComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},