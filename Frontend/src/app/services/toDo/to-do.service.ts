import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDos: string[] = [];

  constructor() { }

  addTodo(toDo: string): boolean {
    this.toDos.push(toDo);
    return true;
  }

}
