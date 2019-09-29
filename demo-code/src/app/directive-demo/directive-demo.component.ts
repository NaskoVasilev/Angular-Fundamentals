import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'softuni-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent  {

  constructor() { }

  inputValue: number = 0;
  
  changeValue(event){
    this.inputValue = +event.target.value;
  }
}
