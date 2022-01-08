import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Directive({
  selector: '[appHighlight]'
})
export class AppComponent {
  title = 'directive';
}



