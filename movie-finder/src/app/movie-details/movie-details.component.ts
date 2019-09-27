import { Component } from '@angular/core';
import MovieDetails from '../models/movieDetails';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: MovieDetails;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    let id = route.snapshot.params.id;
    movieService.getById(id).subscribe(data => {
      this.movie = data;
    });
  }
}
