import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import validateAge from '../age-validator.function';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'softuni-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addressesCount: number = 1;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.form.valueChanges.subscribe(console.log);
    this.form.controls.name.valueChanges
    .pipe(throttleTime(1500))
    .subscribe(console.log)
  }

  addAddress() {
    this.addresses.push(this.CreateAddressFormGroup());
  }
 
  buildForm() {
    let addressGroup: FormGroup = this.CreateAddressFormGroup();

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      age: new FormControl(null, [validateAge]),
      email: new FormControl('test@me.com', [Validators.required]),
      addresses: new FormArray([addressGroup])
    })
    // this.form = this.formBuilder.group({
    //   name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    //   age: [null, [validateAge]],
    //   email: ['test@me.com', [Validators.required]],
    //   addresses: this.formBuilder.array([
    //     this.formBuilder.group({
    //       street: ['', [Validators.required]],
    //       postCode: ['']
    //     })])
    // })
  }

  private CreateAddressFormGroup(): FormGroup {
    return new FormGroup({
      street: new FormControl('', [Validators.required]),
      postCode: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)])
    });
  }

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get ageControl(): AbstractControl {
    return this.form.controls.age;
    //return this.form.get('age');
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  get nameControl(): AbstractControl{
    return this.form.controls.name;
  }
  
  ngOnInit() {
  }
}
