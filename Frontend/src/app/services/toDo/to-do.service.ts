import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ToDo } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private toDos: ToDo[] = [];
  private url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  addTodo(toDoText: string): boolean {
    const toDo: ToDo = {
      id: this.randomId(),
      text: toDoText,
      isFinished: 0
    }
    this.toDos.push(toDo);
    return true;
  }

  randomId(): number {
    return Math.random() * 1000;
  }

  getToDoList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(
      this.url + '/toDoList'
    );
  }
  
  finishToDo(id: number): Observable<any> {
    return this.http.post(this.url + '/finishToDo', {
        toDoId: id
    })
  }

  findToDoById(id: number): ToDo {
    let toDo = this.toDos.find(x => {
      return x.id === id;
    })
    if (toDo) {
      return toDo;
    } else {
      throw new Error('Could not find ToDo')
    }   
  } 

  getUnfinishedTasks(): ToDo[] {
    // return this.toDos.filter(t => {
    //    t.isFinished === true;
    // });
    let unfinishedTasks: ToDo[] = []
    for (let i=0; i < this.toDos.length; i++) {
      if (this.toDos[i].isFinished === 0) {
        unfinishedTasks.push(this.toDos[i])
      }
    }
    return unfinishedTasks;
  }

  getFinishedTasks(): ToDo[] {
    let finishedTasks: ToDo[] = []
    for (let i=0; i < this.toDos.length; i++) {
      if (this.toDos[i].isFinished === 1) {
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
        if (this.toDos[i].isFinished === 0) {
          this.finishToDo(this.toDos[i].id);
        }
    }
  }

  deleteCompleted(): void {
    for (let i = 0; i < this.toDos.length;) {
      if (this.toDos[i].isFinished === 1) {
        this.deleteToDo(this.toDos[i].id);
      } else {
        i++;
      }
    }
  }
}
