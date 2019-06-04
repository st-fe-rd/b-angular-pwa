import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.scss']
})
export class TodosHeaderComponent implements OnInit {

  @Output() todo: EventEmitter<Todo> = new EventEmitter();

  newTodo: Todo;

  constructor() {
    this.newTodo = new Todo();
   }

  ngOnInit() {
  }

  submitNewTodo() {
    this.newTodo.id = new Date().getTime();
    this.todo.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
