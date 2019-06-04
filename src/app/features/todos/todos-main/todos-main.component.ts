import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
})
export class TodosMainComponent implements OnInit {

  @Input() allTodos: Todo[];
  @Output() deletedTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markAsCompleted(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  deleteTodo(todo) {
    this.deletedTodo.emit(todo);
  }
  
}
