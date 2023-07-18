import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {
  meuFavorito: boolean = true;

  favoritar(){
    this.meuFavorito = !this.meuFavorito;
  }
}
