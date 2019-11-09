import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PostRoutingModule
    ],
    declarations: [
        PostListComponent,
        PostCreateComponent,
        PostEditComponent,
        PostDetailsComponent,
        PostInfoComponent,
        CommentCreateComponent,
        CommentInfoComponent
    ],
})
export class PostModule { }
