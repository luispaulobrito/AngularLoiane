import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    rating: 4.54321,
    numeroPaginas: 408,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular']

  filtro: string = '';

  addCurso(valor: string){
    this.livros.push(valor);
  }

  obterCursos (){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    
    let filter = this.filtro.toLocaleString().toLowerCase(); 
    return this.livros.filter((v:string) => v.toLowerCase().includes(filter));
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });
}
