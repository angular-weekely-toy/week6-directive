import { Component, Directive, OnInit } from '@angular/core';

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
  constructor() {}
  ngOnInit() {
	}
}



