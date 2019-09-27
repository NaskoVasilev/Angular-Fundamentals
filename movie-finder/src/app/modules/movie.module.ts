import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from '../components/movies/movies.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { MovieSearchComponent } from '../components/movie-search/movie-search.component';
import { MovieComponent } from '../components/movie/movie.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class MovieModule { }
