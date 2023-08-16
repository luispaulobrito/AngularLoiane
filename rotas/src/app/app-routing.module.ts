import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule)},
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule)},
  // {path: 'cursos', component: CursosComponent},
  // {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},