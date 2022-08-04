import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/models';
import { ToDoService } from 'src/app/services/toDo/to-do.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  $toDos: Observable<ToDo[]> = new Observable();
  unfinishedTasks: number = this.toDoService.getUnfinishedTasks().length;
  toDoText: string = '';
  

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.$toDos = this.toDoService.$toDos;
    console.log(this.$toDos)
  }

  changeText(event: Event): void{ 
    const target = event.target as HTMLInputElement
    this.toDoText = target.value
  }

  addToDo(): void {
    this.toDoService.addTodo(this.toDoText);
    this.resetList();
    this.toDoText = '';
  }

  finishToDo(id: number): void {
    this.toDoService.finishToDo(id);
    this.getAllToDos();
    this.resetList();
  }

  resetList(): void {
    this.unfinishedTasks = this.toDoService.getUnfinishedTasks().length;
  }

  getFinishedTasks(): void {
    // this.toDos = this.toDoService.getFinishedTasks()
  }

  getUnfinishedTasks(): void {
    // this.toDos = this.toDoService.getUnfinishedTasks()
  }

  getAllToDos(): void {
    // this.toDos = this.toDoService.getToDos();
  }

  deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id);
    this.getAllToDos();
    this.resetList();
  }

  completeAllTasks(): void {
    this.toDoService.completeAllTasks();
    this.getAllToDos();
    this.resetList();
  }

  deleteCompleted(): void {
    this.toDoService.deleteCompleted();
    this.getAllToDos();
    this.resetList();
  }
}
