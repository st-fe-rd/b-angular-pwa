import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteMe: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  onDelete(todo) {
    this.deleteMe.emit(this.todo);
  }
}
