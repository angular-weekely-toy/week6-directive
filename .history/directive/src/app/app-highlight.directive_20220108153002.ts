import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() appHighlight = '';
    constructor(private el: ElementRef) {
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
      
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
}