import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {

  transform(amount: any): unknown {
    return '$ ' + amount + ' /only';
  }

}
