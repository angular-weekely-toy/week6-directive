import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'directive';
  color = '';
  limits: number = 10000;
  getNumber: number;

  constructor(private el: ElementRef) {
    
  }
  ngOnInit() {
    this.balance = this.budget;
	}
}



