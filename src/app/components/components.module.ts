import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, DirectivesModule],
})
export class ComponentsModule {}
