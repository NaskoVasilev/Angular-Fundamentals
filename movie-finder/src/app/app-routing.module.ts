import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieResolver } from './services/resolvers/movie.resolver';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MoviesListResolver } from './services/resolvers/movies-list.resolver';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent, resolve: { moviesByCategory: MoviesListResolver } },
  { path: 'movies/search', component: MovieSearchComponent },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: { movie: MovieResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
