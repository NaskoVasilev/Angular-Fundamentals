import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(form: NgForm) {
    const { title, content } = form.value;
    this.postService.create(title, content).subscribe(_ =>{
      this.router.navigate(['home']);
    }, error => {
      console.error(error);
    });
  }
}
