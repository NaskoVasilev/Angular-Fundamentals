import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { Post } from '../../shared/models/post';
import { Observable } from 'rxjs';
import { PostComment } from '../../shared/models/post-comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: Post;
  comments$: Observable<PostComment[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data.post;
    this.comments$ = this.commentService.getAllForPost(this.id);
   }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }

  postComment(body: PostComment){
    body['postId'] = this.id;
    this.commentService.postComment(body)
      .subscribe(() => {
        this.loadComments();
      })
  }
}
