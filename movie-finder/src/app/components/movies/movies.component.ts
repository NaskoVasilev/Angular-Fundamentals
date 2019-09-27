import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularMovies: Movie[] = [];
  theatreMovies: Movie[] = [];
  kidsMovies: Movie[] = [];
  dramaMovies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    let moviesByCategory = this.route.snapshot.data.moviesByCategory;
    this.popularMovies = moviesByCategory[0];
    this.theatreMovies = moviesByCategory[1];
    this.kidsMovies = moviesByCategory[2];
    this.dramaMovies = moviesByCategory[3];
  }
}
