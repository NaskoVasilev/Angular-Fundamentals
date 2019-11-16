import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/componenets/shared/models/post';
import { PostService } from '../services/post.service';

@Injectable({
    providedIn: 'root'
})
export class SinglePostResolver implements Resolve<Post> {
    constructor(private postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        let id = route.params['id'];
        return this.postService.getById(id);
    }
}