import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDos: ToDo[] = [];

  constructor() { }

  addTodo(toDoText: string): boolean {
    const toDo: ToDo = {
      text: toDoText,
      isFinished: false
    }
    this.toDos.push(toDo);
    return true;
  }

  getToDos(): ToDo[] {
    return this.toDos;
  }

  finishToDo(index: number): void {
    this.toDos[index].isFinished = !this.toDos[index].isFinished;
  }
}
