import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from 'src/app/services/toDo/to-do.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  toDos: string[] = []

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDos = this.toDoService.toDos;
  }
}
