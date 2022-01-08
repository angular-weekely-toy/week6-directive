import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Directive({
  selector: '[appHighlight]'
})
export class AppComponent implements OnInit {
  title = 'directive';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit() { 
	}
}



