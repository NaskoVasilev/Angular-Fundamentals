import { Component, ViewChild } from '@angular/core';
import RegisterModel from '../models/register.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-register-form',
  templateUrl: './template-driven-register-form.component.html',
  styleUrls: ['./template-driven-register-form.component.css']
})
export class TemplateDrivenRegisterFormComponent {
  phoneNumberFormats: string[] = ["+701", "+198", "+972", "+359", "+971"]
  positions: string[] = ["Designer", "Accounting", "Manager"]
  
  @ViewChild('form', {read: NgForm, static: false})
  form: NgForm
  
  constructor() { }
  
  register(model: RegisterModel) {
    console.log(model);
    this.form.reset();
  }
}
