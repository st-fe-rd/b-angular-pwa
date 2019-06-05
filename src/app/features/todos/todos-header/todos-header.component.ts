import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
})
export class TodosHeaderComponent implements OnInit {

  @Output() todo: EventEmitter<Todo> = new EventEmitter();

  taskName: string;

  constructor() {
    this.taskName = '';
  }

  ngOnInit() {
  }

  submitNewTodo() {
    if (this.taskName !== '') {
      this.todo.emit(new Todo(this.taskName));
    }
    this.taskName = '';
  }
}
