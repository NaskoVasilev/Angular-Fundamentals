import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  login() {
    const { username, password} = this.loginForm.value;
    this.store.dispatch(new Login({ username, password }));
  }
}
