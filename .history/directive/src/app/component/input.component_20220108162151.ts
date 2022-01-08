import { Component, EventEmitter, Input, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'a-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }],
})
export class InputComponent implements ControlValueAccessor, OnInit {
	@Input() title: string;
	@Input() isInput: boolean = false;
	@Input() isTextarea: boolean = false;
	/**
	 * 최대 입력 개수
	 */
	@Input() maxLength: number = 0;
	@Input() placeholder: string = '';
	@Input() class: any;
	@Input() style: string;
	@Input() valid: string;
	@Input() autocomplete: string;
	@Input() downArrow: boolean = false;
	@Input() readonly: boolean = false;
	@Input() number: boolean = false;
	inputId = '_' + Math.random().toString(36).substr(2, 9);
	_onChange: any = () => {};
	_onTouched: any = () => {};

	innerValue: string = '';
	@Input()
	get value() {
		return this.innerValue;
	}
	set value(value) {
		this.innerValue = value;
		this.onChange(value);
	}

	@Output()
	valueChange: EventEmitter<string> = new EventEmitter<string>();
	constructor() {}
	ngOnInit(): void {
		if (this.isTextarea !== undefined && this.isTextarea !== false) {
			this.isTextarea = true;
		}
		if (this.downArrow !== undefined && this.downArrow !== false) {
			this.downArrow = true;
		}
		if (this.readonly !== undefined && this.readonly !== false) {
			this.readonly = true;
		}
		if (this.number !== undefined && this.number !== false) {
			this.number = true;
		}
	}
	writeValue(obj: any): void {
		this.innerValue = obj;
	}
	registerOnChange(fn: (_: any) => void): void {
		this._onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this._onTouched = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		throw new Error('Method not implemented.');
	}
	onChange(value): void {
		this.valueChange.emit(value);
		this._onChange(value);
	}
}
