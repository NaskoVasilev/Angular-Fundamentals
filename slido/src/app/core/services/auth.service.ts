import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = false;

  isAuthChanged = new Subject<boolean>();
  
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  initializeAuthState() {
    this.angularFireAuth.authState.subscribe((userState) => {
      if(userState) {
        this.isAuth = true;
        this.isAuthChanged.next(true);
      } else {
        this.isAuth = false;
        this.isAuthChanged.next(false);
      }
    });
  }

  signUpUser(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate([ '/login' ]);
      })
      .catch((error) => {
        this.snackbar.open(error.message, 'Undo', {
          duration: 3000
        });
      });
  }

  loginUser(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userData) => {
        this.router.navigate([ '/user' ]);
        localStorage.setItem('email', userData.user.email);
        this.isAuth = true;
        this.isAuthChanged.next(true);
      })
      .catch((error) => {
        this.snackbar.open(error.message, 'Undo', {
          duration: 3000
        });
      });
  }

  logout() {
    this.isAuth = false;
    this.isAuthChanged.next(false);
    this.angularFireAuth.auth.signOut();
    localStorage.clear();
    this.router.navigate([ '/' ]);
  }
}