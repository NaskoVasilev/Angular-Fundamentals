import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[] = [];
  theatreMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies()
    .subscribe(data => this.popularMovies = data['results'].slice(0, 6));

    this.movieService.getTheatreMovies()
    .subscribe(data => this.theatreMovies = data['results'].slice(6, 12));
  }

  movieDetailsClicked(id: number): void{
    console.log('From parent: details button of movie with id ' + id + ' was clicked');
  }
}
