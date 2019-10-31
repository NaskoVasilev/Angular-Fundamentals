import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('posts') posts: any[]
  @Input('users') users: any[]

  constructor() { }

  ngOnInit() {
  }

  //If we implement this functionality in this way, this method will be invoked on each change detection
  getUserPostCount(userId: Number): Number {
    // let postsCount = this.posts.reduce((count, post) =>{
    //   if(post.userId == userId){
    //     return count + 1;
    //   }
    //   return count;
    // }, 0)

    let postsCount = 0;
    this.posts.forEach(post => {
      if (post.userId == userId) {
        postsCount++;
      }
    });

    return postsCount;
  }

}
