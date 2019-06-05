import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { finished } from 'stream';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
})
export class TodosFooterComponent implements OnInit {

  @Input() activeItems: number;
  @Output() filter: EventEmitter<string> = new EventEmitter();
  @Output() finish: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFinish() {
    this.finish.emit();
  }

  onFilter(type: string) {
    this.filter.emit(type);
  }
}
