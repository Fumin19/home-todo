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

  addTodo(toDoText: string): Observable<any> {
    return this.http.post(this.url + '/addToDo', {
      toDoText: toDoText
    })
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

  deleteToDo(id: number): Observable<any> {
    return this.http.post(this.url + '/deleteToDo', {
      toDoId: id
    })
  }
}
