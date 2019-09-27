import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import MovieDetails from 'src/app/models/movieDetails';
import { Observable } from 'rxjs';
import { MovieService } from '../movie.service';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDetails>{
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> {
        let id = route.params.id;
        return this.movieService.getById(id);
    }
}