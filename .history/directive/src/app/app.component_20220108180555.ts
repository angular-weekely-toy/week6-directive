import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'directive';
  color = '';
  
  width = 200;
  height = 200;
  bgColor = '#4caf50';
  isShow = true;


  constructor(private el: ElementRef) {
    
  }
  ngOnInit() {
    
	}
}



