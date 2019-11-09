import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @ViewChild('f') creatPostForm: NgForm;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPost() {
    const body = this.creatPostForm.value;
    body['author'] = localStorage.getItem('username');

    this.postService.createPost(body)
      .subscribe(() => {
        this.router.navigate([ '/posts' ]);
      })
  }
}
