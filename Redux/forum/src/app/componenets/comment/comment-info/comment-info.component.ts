import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostComment } from '../../shared/models/post-comment';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {
  @Input() comment: PostComment;
  @Output() deleteCommentEventEmitter = new EventEmitter<string>();

  constructor() { }

  deleteComment(){
    this.deleteCommentEventEmitter.emit(this.comment._id);
  }

  isCommentAuthor(comment: PostComment) {
    return comment._acl.creator === localStorage.getItem('userId');
  }
}
