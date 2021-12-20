import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [TextColorDirective],
  imports: [CommonModule],
  exports: [TextColorDirective],
})
export class DirectivesModule {}
