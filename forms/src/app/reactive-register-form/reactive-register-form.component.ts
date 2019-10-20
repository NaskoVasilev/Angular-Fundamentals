import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import validateImageUrl from './image-url-validator.function';

@Component({
  selector: 'app-reactive-register-form',
  templateUrl: './reactive-register-form.component.html',
  styleUrls: ['./reactive-register-form.component.css']
})
export class ReactiveRegisterFormComponent {
  fullNamePattern = /[A-Z][a-z]+\s[A-Z][a-z]+/;
  phoneNumberPattern = /^\d{9}$/;
  passwordPattern = /^[A-Za}/;-z0-9]{3,16}$/;
  phoneNumberFormats: string[] = ["+701", "+198", "+972", "+359", "+971"]
  positions: string[] = ["Designer", "Accounting", "Manager"]
  form: FormGroup  
  
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(this.fullNamePattern)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumberFormat: [this.phoneNumberFormats[3], Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneNumberPattern)]],
      position: [this.positions[0], Validators.required],
      passwords: formBuilder.group({
        password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
        confirmPassword: ['', Validators.required]
      }),
      imageUrl: ['', [Validators.required, validateImageUrl]]
    })
   }
  
  register() {
    console.log(this.form)
    console.log(this.form.value);
    this.form.reset();
  }

  get fullName(): AbstractControl{
    return this.form.controls.fullName;
  }

  get email(): AbstractControl{
    return this.form.controls.email;
  }

  get phoneNumberFormat(): AbstractControl{
    return this.form.controls.phoneNumberFormat;
  }

  get phoneNumber(): AbstractControl{
    return this.form.controls.phoneNumber;
  }

  get position(): AbstractControl{
    return this.form.controls.position;
  }

  get passwords(): FormGroup{
    return this.form.controls.passwords as FormGroup;
  }

  get password(): AbstractControl{
    return this.passwords.controls.password;
  }

  get confirmPassword(): AbstractControl{
    return this.passwords.controls.confirmPassword;
  }

  get imageUrl(): AbstractControl{
    return this.form.controls.imageUrl;
  }
}
