import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { InputNumberDirective } from './input-number.directive';

@NgModule({
	exports: [InputComponent, InputNumberDirective],
	declarations: [InputComponent, InputNumberDirective],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class InputModule {}
