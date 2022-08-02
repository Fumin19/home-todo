import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToDo } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private toDos: ToDo[] = [];

  constructor() { }

  addTodo(toDoText: string): boolean {
    const toDo: ToDo = {
      id: this.randomId(),
      text: toDoText,
      isFinished: false
    }
    this.toDos.push(toDo);
    return true;
  }

  randomId(): number {
    return Math.random() * 1000;
  }

  getToDos(): ToDo[] {
    return this.toDos;
  }

  findToDoById(id: number): ToDo {
    let toDo = this.toDos.find(x => {
      return x.id === id;
    })
    if (toDo) {
      return toDo;
    } else {
      throw new Error('Could not get structure name')
    }   
  } 

  finishToDo(id: number): void {
    let toDo = this.findToDoById(id);
    toDo.isFinished = !toDo.isFinished;
  }

  getUnfinishedTasks(): ToDo[] {
    // return this.toDos.filter(t => {
    //    t.isFinished === true;
    // });
    let unfinishedTasks: ToDo[] = []
    for (let i=0; i < this.toDos.length; i++) {
      if (this.toDos[i].isFinished === false) {
        unfinishedTasks.push(this.toDos[i])
      }
    }
    return unfinishedTasks;
  }

  getFinishedTasks(): ToDo[] {
    let finishedTasks: ToDo[] = []
    for (let i=0; i < this.toDos.length; i++) {
      if (this.toDos[i].isFinished === true) {
        finishedTasks.push(this.toDos[i])
      }
    }
    return finishedTasks;
  }

  deleteToDo(id: number): void {
    let indexOfToDo = this.toDos.findIndex((t) => t.id === id);
    this.toDos.splice(indexOfToDo, 1);
  }

  completeAllTasks(): void {
    for (let i = 0; i < this.toDos.length; i++) {
        if (this.toDos[i].isFinished === false) {
          this.finishToDo(this.toDos[i].id);
        }
    }
    console.log(this.toDos.length)
  }

  deleteCompleted(): void {
    for (let i = 0; i < this.toDos.length;) {
      console.log(this.toDos.length);
      if (this.toDos[i].isFinished === true) {
        this.deleteToDo(this.toDos[i].id);
      } else {
        i++;
      }
    }
  }
}
