import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  action: String;
  counter: any;

  constructor() {}

  ngOnInit() {
    this.action = 'all';
    this.todos = [];
    this.counter = {};
  }

  onChange(action: string, todo: Todo) {
    // handle action
    switch (action) {
      case 'add': this.todos = [todo, ...this.todos]; break
      case 'delete': this.todos = this.todos.filter(item => item.id !== todo.id); break
      case 'finish': this.todos = this.todos.filter(item => !item.isCompleted); break
      default: break;
    }
    // update counter when data changed
    this.counter = this.todos.reduce((obj, item: Todo) => {
      item.isCompleted ? obj.completed++ : obj.active++;
      return obj;
    }, { active: 0, completed: 0 });
  }
}
