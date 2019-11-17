import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { Register } from 'src/app/store/auth/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') registerForm: NgForm;

  constructor(private store: Store<IAppState>) { }

  register() {
    const { password, username } = this.registerForm.value;
    this.store.dispatch(new Register({ username, password }));
  }
}
