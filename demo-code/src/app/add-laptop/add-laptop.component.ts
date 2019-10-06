import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Laptop from '../interfaces/laptop';

@Component({
  selector: 'softuni-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit,  AfterViewInit {
  opratingSystems: string[] = [ "Windows 10", "Mac OS", "Linux" ]
  laptop: Laptop
  
  @ViewChild('form') 
  form: NgForm
  
  constructor() {
    this.laptop = {
      operatingSystem: '',
      processor: '',
      ram: '8 GB'
    }
   }  
   
  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    console.dir(this.form)
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset();
  }
}
