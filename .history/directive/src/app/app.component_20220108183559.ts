import { Component, Directive, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

interface User {
  id: number;
  name: string
}

export class AppComponent implements OnInit {
  title = 'directive';
  color = '';
  
  // test4
  width: number = 200;
  height: number = 200;
  bgColor: string = 'pink';
  isShow: boolean = true;

  //test5
  users: User[] = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '시라소니' }
  ];


  constructor(private el: ElementRef) {
    
  }
  ngOnInit() {
    
	}
  // test4 start
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
  // test4 end

  // test5 start

  // test5 end
}



