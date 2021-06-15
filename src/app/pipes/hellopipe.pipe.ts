import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hellopipe'
})
export class HellopipePipe implements PipeTransform {

  transform(name: string): unknown {
    return "Hello Mr/Mrs " + name;
  }
}
