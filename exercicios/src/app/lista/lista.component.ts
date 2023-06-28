import { Component } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listaDeItens: Item[] = [
    {nome: 'feijao', selecionado: false},
    {nome: 'arroz', selecionado: false},
    {nome: 'macarrao', selecionado: false}
  ];

  selecionarItem(item: Item){
    item.selecionado = !item.selecionado;
  }
}