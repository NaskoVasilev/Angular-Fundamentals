import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/movie';

const BaseUrl = "https://api.themoviedb.org";
const ApiKey = "59b10835002fdd86f2c2b3f86d55ddca";
const ApiKeyQueryString = "?api_key=" + ApiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BaseUrl}/3/movie/popular${ApiKeyQueryString}`);
  }

  getTheatreMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BaseUrl}/3/discover/movie${ApiKeyQueryString}&with_release_type=2|3`);
  }
}
