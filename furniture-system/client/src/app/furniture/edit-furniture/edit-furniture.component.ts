import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Furniture } from 'src/app/models/furniture';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  private readonly maxYear = 2050;
  private readonly minYear = 1950;
  form: FormGroup;
  furniture: Furniture;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.furnitureService.getById(this.id).subscribe(data => {
      this.furniture = data;

      this.form = this.formBuilder.group({
        make: [this.furniture.make, [Validators.required, Validators.minLength(4)]],
        model: [this.furniture.model, [Validators.required, Validators.minLength(4)]],
        year: [this.furniture.year, [Validators.required, Validators.min(this.minYear), Validators.max(this.maxYear)]],
        description: [this.furniture.description, [Validators.required, Validators.minLength(10)]],
        price: [this.furniture.price, [Validators.required, Validators.min(0.01)]],
        image: [this.furniture.image, [Validators.required]],
        material: [this.furniture.material, [Validators.nullValidator]]
      })
    });
  }

  editHandler() {
    this.furnitureService.edit(this.id, this.form.value).subscribe(_ => {
      this.router.navigate(['/furniture', 'details', this.id]);
    })
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
