import { Component } from '@angular/core';

@Component({
  selector: 'app-paragrafo-dinamico',
  templateUrl: './paragrafo-dinamico.component.html',
  styleUrls: ['./paragrafo-dinamico.component.css']
})
export class ParagrafoDinamicoComponent {
  texto: string = ''
  campoDigitado: string = ''
  numero: number = 0

  limpar(){
    this.campoDigitado = ''
  }

  incrementar(){
    this.numero++;
  }
  limparNumero(){
    this.numero = 0;
  }

}
