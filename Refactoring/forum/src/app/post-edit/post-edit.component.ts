import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('f') editPostForm: NgForm;
  post: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getById(id)
      .subscribe((data) => {
        this.post = data;
      });
  }

  editPost() {
    const body = this.editPostForm.value;
    body['author'] = localStorage.getItem('username');

    this.postService.editPost(body, this.post['_id'])
      .subscribe(() => {
        this.router.navigate([ '/posts' ]);
      })
  }
}
