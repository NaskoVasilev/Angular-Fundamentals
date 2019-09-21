import { Component, OnInit } from '@angular/core';
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(
        (data: IPost[]) => this.posts = data,
        (err: any) => console.log(err)
      );
  }
}
