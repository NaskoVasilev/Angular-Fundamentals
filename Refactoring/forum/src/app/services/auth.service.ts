import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from '../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  signUp(body: Object) {
    return this.http.post(this.BASE_URL, body,
      {
        headers: new HttpHeaders({
          'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
          'Content-Type': 'application/json'
        })
      });
  }

  signIn(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body, {
      headers: new HttpHeaders({
        'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
        'Content-Type': 'application/json'
      })
    });
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {}, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${this.token}`
      })
    });
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('userId', res['_id']);
  }
}
