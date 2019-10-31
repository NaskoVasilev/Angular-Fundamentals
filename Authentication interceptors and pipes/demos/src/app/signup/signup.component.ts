import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(form: NgForm){
    const { password, name, email } = form.value;
    this.authenticationService.signUp(password, name, email).subscribe(data =>{
      this.router.navigate(['signin'])
    }, err =>{
      console.error(err);
    });
  }
}
