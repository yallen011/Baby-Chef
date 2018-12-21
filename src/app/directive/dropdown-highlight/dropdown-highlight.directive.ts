import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownHighlight]'
})
export class DropdownHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#28a745';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
