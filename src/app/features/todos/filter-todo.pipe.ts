import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(allTodos: Todo[], action: String): Todo[] {
    let displayTodos: Todo[];
    switch(action) {
      case '1': displayTodos = [...allTodos]; break;
      case '2': displayTodos = allTodos.filter(event => !event.check); break;
      case '3': displayTodos = allTodos.filter(event => event.check); break;
      default: break;
    }
    return displayTodos;
  }

}
