import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
 listPeople = [
  {name: 'Victor', age: 21,},
  {name: 'Victor', age: 22,},
  {name: 'FAAS', age: 22,},



  ]
}
