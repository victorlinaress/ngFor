import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-person',
  standalone: false,

  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input({ required: true }) personName: string = '';
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) isFirst: boolean = false;
  @Input({ required: true }) isLast: boolean = false;
  @Input({ required: true }) isSelect: boolean = false;
  @Input({ required: true }) isOdd: boolean = false;

  @Output() onPersonSelectEmitt = new EventEmitter<number>();


selectPerson(){
  this.onPersonSelectEmitt.emit(this.personIndex)
}}
