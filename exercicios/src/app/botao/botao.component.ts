import { Component } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  destacado = true;
  naoDestacado = false;

  destacar(){
    this.destacado = !this.destacado;
    this.naoDestacado = !this.naoDestacado;
  }
}
