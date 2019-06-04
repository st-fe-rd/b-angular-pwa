import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos-header',
  templateUrl: './todos-header.component.html',
  styleUrls: ['./todos-header.component.scss']
})
export class TodosHeaderComponent implements OnInit {

  @Output() todo: EventEmitter<Todo> = new EventEmitter();

  newTodo: Todo;

  constructor() {
    this.newTodo = new Todo();
   }

  ngOnInit() {
    this.addNewTodo();
  }

  async addNewTodo() {
    this.newTodo.id = new Date().getTime();
    await this.todo.emit(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.newTodo);
    
  }

}
