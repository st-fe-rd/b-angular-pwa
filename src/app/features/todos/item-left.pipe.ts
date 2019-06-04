import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({
  name: 'itemLeft'
})
export class ItemLeftPipe implements PipeTransform {

  transform(allTodos: Todo[], flag: Boolean): Number {
    return allTodos.filter(event => !event.check).length;
  }

}
