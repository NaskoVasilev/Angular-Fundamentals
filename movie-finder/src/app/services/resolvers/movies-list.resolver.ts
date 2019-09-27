import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { MovieService } from '../movie.service';

@Injectable({ providedIn: 'root' })
export class MoviesListResolver implements Resolve<any>{
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return forkJoin(
            this.movieService.getPopularMovies(),
            this.movieService.getInTheatreMovies(),
            this.movieService.getKidsMovies(),
            this.movieService.getDramaMovies()
        );
    }
}