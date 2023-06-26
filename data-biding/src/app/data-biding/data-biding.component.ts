import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  
  url: string = 'http://loiane.com'
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/?3';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }
}
