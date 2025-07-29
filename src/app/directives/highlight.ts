import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {

  @Input() highlightColor: string = '';

  constructor(private el: ElementRef) {
    console.log('Inside highlight directive');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    console.log('highlight()');
    console.log(this.el);
    this.el.nativeElement.style.backgroundColor = color;
  }

}
