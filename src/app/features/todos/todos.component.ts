import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { 

  allTodos: Todo[];
  action: String;
  flag: Boolean;

  constructor() {}

  ngOnInit() {
    this.action = '1';
    this.getDefaultTodo();
  }

  // Add a default Todo
  getDefaultTodo() {
    this.allTodos = [new Todo('Use Redux')];
  }

  addNewTodo(todo: Todo) {
    this.allTodos = [todo,...this.allTodos];
  }

  deleteTodo(todo: Todo) {
    this.allTodos = this.allTodos.filter(event => event.id !== todo.id);
  }

  // Change flag whenever an item is checked
  check() {
    this.flag = !this.flag;
  }

  // Change this.action whenever a button in footer is clicked
  handleAction(action: String) {
    action === '4' ? this.allTodos = this.allTodos.filter(event => !event.check) : this.action = action;
  }

}
