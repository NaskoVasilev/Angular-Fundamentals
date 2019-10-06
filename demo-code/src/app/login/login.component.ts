import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'softuni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loginForm', { read: NgForm })
  loginForm: NgForm;

  inputValue: string = "Test input value";

  constructor() {
    setTimeout(() => {
      this.inputValue = "Input value was changed";
    }, 6000);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loginForm.valueChanges.subscribe(console.log)
  }

  onSubmit(model: LoginModel) {
    console.log(model);
  }
}
