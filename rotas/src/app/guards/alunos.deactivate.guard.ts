import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from "./iform.candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{

    canDeactivate(
        component: IFormCanDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            console.log('desativacao');
            
            // return component.podeMudarRota();   
            return component.podeDesativar();
    }
}