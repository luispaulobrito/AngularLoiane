import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitchcase',
  templateUrl: './diretiva-ngswitchcase.component.html',
  styleUrls: ['./diretiva-ngswitchcase.component.css']
})
export class DiretivaNgswitchcaseComponent {
  diaSemana: number = 0;
  
  corSelecionada: string = '';
  cores: string[] = ['azul', 'verde','vermelho'];

  selecionarCor(cor: string){
    this.corSelecionada = cor;
  }
}
