import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbinding';
  currentFlag:boolean=false;
  firstName: string="";


  onclick() {
    this.title="New title from Event click"
  }
}
