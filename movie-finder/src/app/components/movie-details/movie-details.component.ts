import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from 'src/app/models/movieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: MovieDetails;

  constructor(private route: ActivatedRoute) {
    this.movie = route.snapshot.data.movie;
  }
}
