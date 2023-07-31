import { Component } from '@angular/core';

@Component({
  selector: 'app-task-lst',
  templateUrl: './task-lst.component.html',
  styleUrls: ['./task-lst.component.css']
})
export class TaskLstComponent {
  tarefas: string[] = [];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(tarefa: string){
    const index = this.tarefas.indexOf(tarefa);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
