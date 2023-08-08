import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private totalInvestido: number = 0;
  private ganhoJuros: number = 0;
  private montanteFinal: number = 0;

  constructor() { }

  setTotalInvestido(totalInvestido: number){
    this.totalInvestido = totalInvestido;
  }

  getTotalInvestido(){
    return this.totalInvestido
  }

  setGanhoJuros(ganhoJuros: number){
    this.ganhoJuros = ganhoJuros;
  }

  getGanhoJuros(){
    return this.ganhoJuros
  }

  setMontanteFinal(montanteFinal: number){
    this.montanteFinal = montanteFinal;
  }

  getMontanteFinal(){
    return this.montanteFinal
  }

}
