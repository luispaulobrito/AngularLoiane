import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  corDigitada: string = ''
  corFundo: string = 'gray'

  alterarCor(){
    this.corFundo = this.corDigitada;
  }
}
