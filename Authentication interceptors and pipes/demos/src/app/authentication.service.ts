import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post<{ token: string, message: string, userId: string }>('auth/signin', { email, password });
  }

  signUp(password: string, name: string, email: string) {
    return this.http.post<{ message: string, userId: string }>('auth/signup', { email, password, name })
  }
}
