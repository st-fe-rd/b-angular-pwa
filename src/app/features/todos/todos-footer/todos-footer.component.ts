import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { finished } from 'stream';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
})
export class TodosFooterComponent implements OnInit {

  @Input() counter: any;
  @Output() filter: EventEmitter<string> = new EventEmitter();
  @Output() finish: EventEmitter<string> = new EventEmitter();
  action: string;

  constructor() {
    this.action = 'all';
  }

  ngOnInit() {
  }

  onFinish() {
    this.finish.emit();
    this.onFilter('all');
  }

  onFilter(type: string) {
    this.action = type;
    this.filter.emit(type);
  }
}
