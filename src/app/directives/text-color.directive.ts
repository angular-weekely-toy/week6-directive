import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  HostListener,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[textColor]',
})
export class TextColorDirective implements OnInit, OnChanges {
  @Input() color!: string;
  @Input() clickColor!: string;
  @Input() hoverColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.changeColor(this.color);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      this.color = changes.color.currentValue;
      this.changeColor(this.color);
    } else if (changes.clickColor) {
      this.clickColor = changes.clickColor.currentValue;
    } else if (changes.hoverColor) {
      this.hoverColor = changes.hoverColor.currentValue;
    }
  }

  // Click 시
  @HostListener('click') handleMouseClick() {
    this.changeColor(this.clickColor);
  }

  // Hover 시
  @HostListener('mouseenter') handleMouseEnter() {
    this.changeColor(this.hoverColor);
  }

  // Leave 시
  @HostListener('mouseleave') handleMouseLeave() {
    this.changeColor(this.color);
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
