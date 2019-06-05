import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
})
export class TodosFooterComponent implements OnInit {

  @Input() itemLeft: Number;
  @Output() behavior: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleFilter(event) {
    this.behavior.emit(event.target.id);
  }
}
