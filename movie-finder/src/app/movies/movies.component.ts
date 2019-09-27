import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  theatreMovies: Movie[] = [];
  kidsMovies: Movie[] = [];
  dramaMovies: Movie[] = [];
  popularMoviesSubscription: Subscription;
  theatreMoviesSubscription: Subscription;
  kidsMoviesSubscription: Subscription;
  dramaMoviesSubscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.popularMoviesSubscription = this.movieService.getPopularMovies()
    .subscribe(data => this.popularMovies = data);

    this.theatreMoviesSubscription = this.movieService.getInTheatreMovies()
    .subscribe(data => this.theatreMovies = data);

    this.kidsMoviesSubscription = this.movieService.getKidsMovies()
    .subscribe(data => this.kidsMovies = data);

    this.dramaMoviesSubscription = this.movieService.getDramaMovies()
    .subscribe(data => this.dramaMovies = data);
  }

  ngOnDestroy(): void {
    //We should unsubscribe from observable when we go to other page if we do not want to have memory leaks
    this.popularMoviesSubscription.unsubscribe();
    this.theatreMoviesSubscription.unsubscribe();
    this.kidsMoviesSubscription.unsubscribe();
    this.dramaMoviesSubscription.unsubscribe();
  }
}
