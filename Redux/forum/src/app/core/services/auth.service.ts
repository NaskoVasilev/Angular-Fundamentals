import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(private http: HttpClient) { }


  register(body: { username: string, password: string}) {
    return this.http.post(this.BASE_URL, body);
  }

  login(body: { username: string, password: string}) {
    return this.http.post<{ username: string, _kmd: { authtoken: string}, _id: string }>(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }
}
