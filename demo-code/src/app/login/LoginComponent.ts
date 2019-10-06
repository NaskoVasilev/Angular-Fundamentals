import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginModel } from '../models/login.model';
@Component({
  selector: 'softuni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputValue: string = "Test input value";
  constructor() {
    setTimeout(() => {
      this.inputValue = "Input value was changed";
    }, 3000);
  }
  ngOnInit() {
  }
  onSubmit(model: LoginModel) {
    console.log(model);
  }
}
