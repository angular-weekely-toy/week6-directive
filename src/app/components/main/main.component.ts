import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private colors = {
    red: 'red',
    green: 'green',
    blue: 'blue',
  };

  color: string = this.colors.red;
  clickColor: string = this.colors.green;
  hoverColor: string = this.colors.blue;

  constructor() {}

  ngOnInit(): void {}

  toRed(status: string) {
    this.changeColor(status, 'red');
  }

  toGreen(status: string) {
    this.changeColor(status, 'green');
  }

  toBlue(status: string) {
    this.changeColor(status, 'blue');
  }

  private changeColor(status: string, color: string) {
    switch (status) {
      case 'click':
        this.clickColor = color;
        break;

      case 'hover':
        this.hoverColor = color;
        break;

      default:
        this.color = color;
        break;
    }
  }
}
