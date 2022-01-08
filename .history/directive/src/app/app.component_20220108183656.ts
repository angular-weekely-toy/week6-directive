import { Component, Directive, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

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
  addUser(name: string) {
    if (name) {
      this.users.push({ id: this.getNewUserId(), name });
    }
  }

  // 해당 user를 제거한다.
  removeUser(userid: number) {
    this.users = this.users.filter(({ id }) => id !== userid);
  }

  // 추가될 users의 id를 반환한다
  getNewUserId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }

  // 변경 트래킹 기준을 반환한다.
  trackByUserId(index: number, user: User) {
    // user.id를 기준으로 변경을 트래킹한다.
    return user.id; // or index
  }
  // test5 end
}



