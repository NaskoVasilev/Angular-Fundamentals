import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(form: NgForm): void{
    const {password, email} = form.value;
    this.authenticationService.signIn(email, password).subscribe(data => {
      localStorage.setItem("AUTH_TOKEN", data.token);
      this.router.navigate(['home']);
    }, error => {
      console.error(error);
    });
  }
}
