import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
