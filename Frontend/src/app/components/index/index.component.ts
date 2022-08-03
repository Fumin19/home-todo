import { Component, OnInit, NgModule } from '@angular/core';
import { ToDo } from 'src/app/models/models';
import { ToDoService } from 'src/app/services/toDo/to-do.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  toDos: ToDo[] = this.toDoService.getToDos();
  unfinishedTasks: number = this.toDoService.getUnfinishedTasks().length;
  toDoText: string = '';

  constructor(private toDoService: ToDoService) { }

  changeText(event: Event): void{ 
    const target = event.target as HTMLInputElement
    this.toDoText = target.value
  }

  ngOnInit(): void {
  }

  addToDo(): void {
    this.toDoService.addTodo(this.toDoText);
    this.resetList();
    this.toDoText = '';
  }

  finishToDo(id: number): void {
    this.toDoService.finishToDo(id);
    this.getAllTasks();
    this.resetList();
  }

  resetList(): void {
    this.unfinishedTasks = this.toDoService.getUnfinishedTasks().length;
  }

  getFinishedTasks(): void {
    this.toDos = this.toDoService.getFinishedTasks()
  }

  getUnfinishedTasks(): void {
    this.toDos = this.toDoService.getUnfinishedTasks()
  }

  getAllTasks(): void {
    this.toDos = this.toDoService.getToDos();
  }

  deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id);
    this.getAllTasks();
    this.resetList();
  }

  completeAllTasks(): void {
    this.toDoService.completeAllTasks();
    this.getAllTasks();
    this.resetList();
  }

  deleteCompleted(): void {
    this.toDoService.deleteCompleted();
    this.getAllTasks();
    this.resetList();
  }
}
