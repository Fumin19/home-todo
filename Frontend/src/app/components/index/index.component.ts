import { Component, OnInit, NgModule } from '@angular/core';
import { ToDo } from 'src/app/models/models';
import { ToDoService } from 'src/app/services/toDo/to-do.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  toDos!: ToDo[]
  toDoText: string = '';

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getAllToDos()
  }

  changeText(event: Event): void{ 
    const target = event.target as HTMLInputElement
    this.toDoText = target.value
  }

  getAllToDos(): void {
    this.toDoService.getToDoList().subscribe((toDos) => {
      this.toDos = toDos
    })
  }

  addToDo(): void {
    let text = this.toDoText;  
    this.toDoService.addTodo(text).subscribe((res) => {
      if (res.message === "OK") {       
        const toDo: ToDo = {
          id: res.id,
          text: text,
          isFinished: 0
        }
        this.toDos.push(toDo);
      }
    })
    this.toDoText = '';
  }

  finishToDo(id: number): void {
    this.toDoService.finishToDo(id).subscribe((res) => {
      if(res.message === 'OK') {       
        const toDo = this.toDos.find((t) => 
            t.id === id
        );
        
        if (toDo) {
          if (toDo.isFinished === 0) {
            toDo.isFinished = 1
          } else if (toDo.isFinished === 1) {
            toDo.isFinished = 0;
          };
        }        
      }
    })
  }

  deleteToDo(id: number): void {
    this.toDoService.deleteToDo(id).subscribe((res) => {
      if(res.message === 'OK') {              
        const indexOfToDo = this.toDos.findIndex((t) => 
            t.id === id
        );
          this.toDos.splice(indexOfToDo, 1)     
      }
    });
  }
}
