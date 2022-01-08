import { Component, Directive, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'directive';
  color = '';
  
  width: number = 200;
  height: number = 200;
  bgColor: string = 'pink';
  isShow: boolean = true;


  constructor(private el: ElementRef) {
    
  }
  ngOnInit() {
    
	}

  increaseWidth()  { 
    this.width = +this.width + 10; 
  }

  decreaseWidth()  { 
    this.width = +this.width - 10; 
  }

  increaseHeight() { 
    this.height = +this.height + 10; 
  }
  
  decreaseHeight() { 
    this.height = +this.height - 10; 
  }

}



