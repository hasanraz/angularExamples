import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppRoundBlock]'
})
export class AppRoundBlockDirective {

  constructor(renderer: Renderer2, elem: ElementRef) { 
    renderer.setStyle(elem.nativeElement, 'border', '3px solid red');
    renderer.setStyle(elem.nativeElement, 'border-radius', '20px');
  }

}
