import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
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

  getUnfinishedTasks(): number {
    // return this.toDos.filter(t => {
    //   t.isFinished === true;
    // }).length;
    let counter: number = 0;
    for (let i=0; i < this.toDos.length; i++) {
      if (this.toDos[i].isFinished === false) {
        counter ++;
      }
    }
    return counter;
  }
}
