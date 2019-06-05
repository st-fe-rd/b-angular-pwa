import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  action: String;

  constructor() {}

  ngOnInit() {
    this.action = 'all';
    this.todos = [];
  }

  onChange(action: string, todo: Todo) {
    switch (action) {
      case 'add': this.todos = [todo, ...this.todos]; break
      case 'delete': this.todos = this.todos.filter(item => item.id !== todo.id); break
      default: this.todos = this.todos.filter(item => !item.isCompleted);
    }
  }
}
