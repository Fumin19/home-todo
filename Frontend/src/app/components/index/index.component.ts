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

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  addToDo(toDoText: string): void {
    this.toDoService.addTodo(toDoText);
    this.resetList();
  }

  finishToDo(id: number): void {
    this.toDoService.finishToDo(id);
    this.resetList();
  }

  resetList(): void {
    this.unfinishedTasks = this.toDoService.getUnfinishedTasks().length;
    console.log(this.unfinishedTasks)
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
}
