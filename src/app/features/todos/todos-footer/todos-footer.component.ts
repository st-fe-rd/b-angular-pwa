import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.scss']
})
export class TodosFooterComponent implements OnInit {

  @Input() itemLeft: Number;
  @Output() action: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 
  handleFilter(event) {
    this.action.emit(event.target.id);
  }
}
