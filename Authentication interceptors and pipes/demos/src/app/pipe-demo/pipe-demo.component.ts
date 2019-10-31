import { Component, OnInit, OnDestroy } from '@angular/core';
import { zip, Subscription, Observable, Subject } from 'rxjs'
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit, OnDestroy {
  now: Date = new Date();
  obj = {
    firstName: 'Atanas',
    lastName: 'Vasilev'
  }
  //subscription: Subscription;
  posts: any[];
  users: any[];

  users$: Observable<any[]>
  posts$: Observable<any[]>
  isAlive$: Subject<any> = new Subject<any>();
  
  constructor(private userService: UserService, private postService: PostService) { 
    // this.subscription = zip(this.postService.load(), this.userService.load())
    // .subscribe(([posts, users]) =>{
    //   this.posts = posts;
    //   this.users = users;
    // })
    this.users$ = this.userService.load();
    this.posts$ = this.postService.load();
    
    zip(this.postService.load(), this.userService.load())
    .pipe(takeUntil(this.isAlive$))
    .subscribe(([posts, users]) =>{
      this.posts = posts;
      this.users = users;
    })
  }

  ngOnInit() {
  }

  addPost(){
    // posts count won't be recalculated because posts has the same reference and pipe returns previous value
    // this.posts.push({
    //   id: 3,
    //   userId: 2,
    //   title: 'Post 3'
    // });

    this.posts =  this.posts.concat({
      id: 3,
      userId: 2,
      title: 'Post 3'
    });
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
    this.isAlive$.complete();
  }
}
