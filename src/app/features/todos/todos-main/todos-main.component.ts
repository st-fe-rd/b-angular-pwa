import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.scss']
})
export class TodosMainComponent implements OnInit {

  @Input() allTodos: Todo[];
  @Output() deletedTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() flag: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkTodo(todo) {
    todo.check = !todo.check;
    this.flag.emit();
  }

  deleteTodo(todo) {
    this.deletedTodo.emit(todo);
  }
  
}
