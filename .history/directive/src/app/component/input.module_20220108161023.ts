import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JrdInputComponent } from './jrd-input.component';
import { JrdInputNumberDirective } from './jrd-input-number.directive';

@NgModule({
	exports: [JrdInputComponent, JrdInputNumberDirective],
	declarations: [JrdInputComponent, JrdInputNumberDirective],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class JrdInputModule {}
