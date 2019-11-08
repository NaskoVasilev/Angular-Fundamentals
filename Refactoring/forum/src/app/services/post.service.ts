import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY } from '../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_POSTS = `${this.BASE_URL}/posts?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Object[]>(this.ALL_POSTS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  createPost(body: Object) {
    return this.http.post(this.CREATE_POST, body, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  getById(id: string) {
    return this.http.get<Object>(this.CREATE_POST + `/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  getDetails(id: string) {
    return this.http.get<Object>(this.CREATE_POST + `/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  editPost(body: Object, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  deletePost(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
      })
    });
  }

  getUserPosts() {
    return this.http
      .get<Object[]>(`${this.BASE_URL}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`, {
        headers: new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('token')}`
        })
      });
  }
}