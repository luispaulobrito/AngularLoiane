import { CalculadoraService } from './../calculadora.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  
  constructor(private calculadoraService: CalculadoraService){}

  
  getTotalInvestido(){
    return this.calculadoraService.getTotalInvestido();
  }
  getGanhoJuros(){
    return this.calculadoraService.getGanhoJuros();;
  }
  getMontanteFinal(){
    return this.calculadoraService.getMontanteFinal();
  }

}
