import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
})
export class TodosMainComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() deletedTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(todo) {
    this.deletedTodo.emit(todo);
  }
}
