import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";
@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular', 'Java', 'SpringBoot'];
    
    constructor(private logService: LogService){}

    getCursos(){
        this.logService.consoleLog('OBTENDO LISTA DE CURSOS')
        return this.cursos;
    }
    
    addCurso(curso: string){
        this.logService.consoleLog('CRIANDO UM NOVO CURSO ' + curso)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso)
    }
}