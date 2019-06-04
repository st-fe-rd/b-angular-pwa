import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit { 

  todos: Todo[];
  action: String;

  constructor() {}

  ngOnInit() {
    this.action = 'all';
    this.todos = [new Todo('Use Redux')];
  }

  addNewTodo(todo: Todo) {
    this.todos = [todo,...this.todos];
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(event => event.id !== todo.id);
  }

  // Return length of array active todo
  countActiveTodos() {
    return this.todos.filter(event => !event.isCompleted).length;
  }

  // Change this.action whenever a button in footer is clicked
  handleAction(action: String) {
    action === 'clearCompleted' ? this.todos = this.todos.filter(event => !event.isCompleted) : this.action = action;
  }

}
