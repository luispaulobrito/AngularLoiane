import { Injectable } from "@angular/core";
@Injectable()
export class CursosService{

    private cursos: string[] = ['Angular', 'Java', 'SpringBoot'];
    
    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
}