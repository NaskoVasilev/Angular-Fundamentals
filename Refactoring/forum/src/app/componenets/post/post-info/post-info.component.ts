import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input('post') post: Post;
  @Input('rank') rank: number;
  @Input('showDescription') showDescription: boolean;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  isAuthor() {
    return this.post._acl.creator === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
