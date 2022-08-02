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

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  addToDo(toDoText: string) {
    this.toDoService.addTodo(toDoText);
    this.toDos = this.toDoService.getToDos();
  }

  finishToDo(index: number): void {
    this.toDoService.finishToDo(index);
    this.toDos = this.toDoService.getToDos();
  }
}
