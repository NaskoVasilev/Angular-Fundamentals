import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  @ViewChild('form')
  searchForm: NgForm;

  constructor(private router: Router) { }

  search() {
    let query: string = this.searchForm.value.query;
    let queryParams: Params = { query };
    this.router.navigate(['movies', 'search'], { queryParams });
  }
}
