import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Movie from '../models/movie';
import MovieDetails from '../models/movieDetails';

const BaseUrl = "https://api.themoviedb.org/3";
const ApiKey = "59b10835002fdd86f2c2b3f86d55ddca";
const QueryStringDelimiter = '&';
const QueryStringSign = '?';
const ApiKeyQueryString = "api_key=" + ApiKey;
const InTheatresMovies = "/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22";
const PopularMovies = "/discover/movie?sort_by=popularity.desc";
const KidsMovies = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
const DramaMovies = "/discover/movie?with_genres=18&primary_release_year=2019";
const MoviesCount = 6;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(BaseUrl + `/movie/${id}` + QueryStringSign + ApiKeyQueryString);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.getMovies(InTheatresMovies);
  }

  getInTheatreMovies(): Observable<Movie[]> {
    return this.getMovies(PopularMovies);
  }

  getKidsMovies(): Observable<Movie[]> {
    return this.getMovies(KidsMovies);
  }

  getDramaMovies(): Observable<Movie[]> {
    return this.getMovies(DramaMovies);
  }

  private getMovies(path: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(BaseUrl + path + QueryStringDelimiter + ApiKeyQueryString)
      .pipe(
        map(data => data['results'].slice(0, MoviesCount)),
      );
  }
}
