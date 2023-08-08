import { CalculadoraService } from './../calculadora.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent {

  constructor(private calculadoraService: CalculadoraService){}

  valorInicial: number = 0;
  valorMensal: number = 0;
  taxaDeJuros: number = 0;
  tipoTaxa: string = '';
  periodo: number = 0;
  tipoPeriodo: string = '';
  
  calcularTotalInvestido(){
    const n = this.tipoPeriodo === 'anos'? this.periodo*12 : this.periodo;
    const totalInvestido = this.valorInicial+(this.valorMensal*n);
    this.calculadoraService.setTotalInvestido(totalInvestido);
    return totalInvestido;
  }
  
  calcularGanhoJuros(){
    const ganhoJuros = this.calcularTotal() - this.calcularTotalInvestido();
    this.calculadoraService.setGanhoJuros(ganhoJuros);
    return ganhoJuros;
  }

  calcularTotal() {
    const n = this.tipoPeriodo === 'anos'? this.periodo*12 : this.periodo;
    const r = this.tipoTaxa === 'anual'? this.taxaDeJuros/12 : this.taxaDeJuros;
      let montanteFinal = this.valorInicial;
      for (let i = 0; i < n; i++) {
        montanteFinal *= (1 + r/100);
        montanteFinal += this.valorMensal;
      }
      this.calculadoraService.setMontanteFinal(montanteFinal);
    return montanteFinal;
  }
}

