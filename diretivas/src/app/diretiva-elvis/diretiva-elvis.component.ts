import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-elvis',
  templateUrl: './diretiva-elvis.component.html',
  styleUrls: ['./diretiva-elvis.component.scss']
})
export class DiretivaElvisComponent {
  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
  };
}
