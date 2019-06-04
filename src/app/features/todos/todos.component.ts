import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { 

  allTodos: Todo[];
  action: String;
  itemLeft: Number;

  constructor() {}

  ngOnInit() {
    this.action = 'all';
    this.getDefaultTodo();
    this.check();
  }

  // Add a default Todo
  getDefaultTodo() {
    this.allTodos = [new Todo('Use Redux')];
  }

  addNewTodo(todo: Todo) {
    this.allTodos = [todo,...this.allTodos];
    this.check();
  }

  deleteTodo(todo: Todo) {
    this.allTodos = this.allTodos.filter(event => event.id !== todo.id);
    this.check();
  }

  // Change flag whenever an item is checked
  check() {
    this.itemLeft = this.allTodos.filter(event => !event.check).length;
  }

  // Change this.action whenever a button in footer is clicked
  handleAction(action: String) {
    action === 'clearCompleted' ? this.allTodos = this.allTodos.filter(event => !event.check) : this.action = action;
  }

}
