import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSolidborder]'
})
export class SolidborderDirective {

  constructor(public render: Renderer2, public elemref: ElementRef) {
    render.setStyle(elemref.nativeElement, 'border', '1px solid red');
   }

}
