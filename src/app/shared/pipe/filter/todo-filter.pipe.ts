import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(allTodos: Todo[], action: string): Todo[] {
    switch (action) {
      case 'active': return allTodos.filter(event => !event.isCompleted);
      case 'completed': return allTodos.filter(event => event.isCompleted);
      default: return [...allTodos];
    }
  }

}
