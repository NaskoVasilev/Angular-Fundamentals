import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'auth/login';
  private readonly registerUrl = 'auth/register';
  private readonly tokenKey = 'token';
  private readonly usernameKey = 'username';
  private readonly isAdminKey = 'isAdmin';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return this.getToken() !== null;
  }

  getToken(): string{
    return localStorage.getItem(this.tokenKey);
  }

  saveToken(token: string): void{
    localStorage.setItem(this.tokenKey, token);
  }

  getUsername(): string{
    return localStorage.getItem(this.usernameKey);
  }

  saveUsername(username: string): void{
    localStorage.setItem(this.usernameKey, username);
  }

  isAdmin(): boolean{
    return localStorage.getItem(this.isAdminKey).toLowerCase() === 'true';
  }

  setIsAdmin(isAdmin: string): void{
    localStorage.setItem(this.isAdminKey, isAdmin);
  }
}