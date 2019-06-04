import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(allTodos: Todo[], action: String): Todo[] {
    switch(action) {
      case 'active': return allTodos.filter(event => !event.isCompleted); 
      case 'completed': return allTodos.filter(event => event.isCompleted);
      default: return [...allTodos];
    }
  }

}
