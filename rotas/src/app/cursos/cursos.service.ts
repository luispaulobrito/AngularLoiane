import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      { id:1 , nome: "Angular"},
      { id:2 , nome: "Spring"},
      { id:3 , nome: "Java"}
    ];
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
        if (curso.id == id) {
          return curso;
        }
    }
    return null;
  }
}
