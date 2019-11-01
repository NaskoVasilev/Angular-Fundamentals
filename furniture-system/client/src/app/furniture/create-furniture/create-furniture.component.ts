import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  currentYear = new Date().getFullYear();
  form: FormGroup;
  minYear = 1950;
  maxYear = 2050;
  constructor(
    private formBuilder: FormBuilder,
    private furnitureService: FurnitureService, 
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: [this.currentYear, [Validators.required, Validators.min(this.minYear), Validators.max(this.maxYear)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0.00, [Validators.required, Validators.min(0.01)]],
      image: ['', [Validators.required]],
      material: ['', [Validators.nullValidator]]
    })
  }

  createFurniture() {
    this.furnitureService.create(this.form.value)
      .subscribe(_ => this.router.navigate(['furniture/all']));
  }

  get make(): AbstractControl {
    return this.form.controls.make;
  }

  get model(): AbstractControl {
    return this.form.controls.model;
  }

  get year(): AbstractControl {
    return this.form.controls.year;
  }

  get description(): AbstractControl {
    return this.form.controls.description;
  }

  get price(): AbstractControl {
    return this.form.controls.price;
  }

  get image(): AbstractControl {
    return this.form.controls.image;
  }
}
