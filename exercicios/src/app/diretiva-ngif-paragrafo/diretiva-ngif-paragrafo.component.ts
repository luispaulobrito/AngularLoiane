import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif-paragrafo',
  templateUrl: './diretiva-ngif-paragrafo.component.html',
  styleUrls: ['./diretiva-ngif-paragrafo.component.css']
})
export class DiretivaNgifParagrafoComponent {
  mostrarParagrafo: boolean = true;
  mostrarInput: boolean = true;
  nomesMasculinos: string[] = ['Luis', 'José', 'Pedro'];
  nomesFemininos: string[] = [];  

  mostrarOcultarInput(){
    this.mostrarInput = !this.mostrarInput;
  }
}
