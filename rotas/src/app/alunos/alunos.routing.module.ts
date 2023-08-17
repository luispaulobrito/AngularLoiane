import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDeactivateGuard } from '../guards/alunos.deactivate.guard';

const routes: Routes = [
    { path: '', component: AlunosComponent, children : [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent, 
        canDeactivate: [AlunosDeactivateGuard]
    }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}
