import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor(private cursosService: CursosService){  }

  cursos: any[] = [];

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
