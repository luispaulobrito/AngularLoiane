import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
    { 
      path: 'cursos', 
      loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
    },
    { 
      path: 'alunos', 
      loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
      canActivate: [AuthGuard],
      canActivateChild: [AlunosGuard],
      canLoad: [AuthGuard]
    },
    {path: 'login', component: LoginComponent},
    {
      path: '', 
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '**', 
      component: PaginaNaoEncontradaComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},