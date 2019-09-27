import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import Movie from 'src/app/models/movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchedMovies: Movie[];
  query: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.query = params.query;
      this.movieService.serachMovies(this.query).subscribe(data => {
        this.searchedMovies = data['results'];
      });
    })
  }
}
