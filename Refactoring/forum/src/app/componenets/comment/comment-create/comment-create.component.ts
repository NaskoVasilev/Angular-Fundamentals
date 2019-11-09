import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostComment } from '../../shared/models/post-comment';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {
  @ViewChild('form') createCommentForm: NgForm;
  @Output() createCommentEmitetr = new EventEmitter<PostComment>();  

  constructor() { }

  postComment() {
    const body = this.createCommentForm.value;
    body['author'] = localStorage.getItem('username');
    this.createCommentEmitetr.emit(body);
    this.createCommentForm.reset();
  }
}
