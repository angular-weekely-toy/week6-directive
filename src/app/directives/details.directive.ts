import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDetails]'
})
export class DetailsDirective {
  private hasView = false;
  @Input() set appDetails(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

}
