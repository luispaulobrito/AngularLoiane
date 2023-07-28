import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlitghtMouse]'
})
export class HighlitghtMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
  ) { }

}
