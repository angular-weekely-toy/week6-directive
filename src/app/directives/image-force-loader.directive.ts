import {Directive, ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: 'img[src]'
})
export class ImageForceLoaderDirective {
  // @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    el.nativeElement.setAttribute('src', el.nativeElement.getAttribute('src') + '?cache=' + Date.now());
  }

  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.highlight('yellow');
  // }
  //
  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.highlight('');
  // }
  //
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
