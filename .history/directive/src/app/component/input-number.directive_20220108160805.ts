import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Directive({
	// tslint:disable-next-line: directive-selector
	selector: 'input[number]',
})
export class JrdInputNumberDirective {
	innerValue;
	@Input('ngModel')ngModel;
	@Output() public ngModelChange = new EventEmitter<any>();
	
	@Input() number: boolean = false;
	private destroy$ = new Subject<void>();
	constructor(private elementRef: ElementRef) {}
	ngOnInit(): void {
		if (this.number) {
			fromEvent(this.elementRef.nativeElement, 'input')
				.pipe(	
					// distinctUntilChanged(null, (event: Event) => (event.target as HTMLInputElement).value),
					takeUntil(this.destroy$),
				)
				.subscribe((e) => {
					// const target = e.target as HTMLInputElement;
					if (this.ngModel) {
						this.ngModel=this.ngModel.replace(/\D|[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, '');
						this.ngModelChange.emit(this.ngModel);
					}
				});
		}
	}
	ngOnDestroy() {
		this.destroy$.next();
	}
}
