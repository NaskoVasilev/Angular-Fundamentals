import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { SinglePostResolver } from 'src/app/core/resolvers/single-post.resolver';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PostListComponent },
    { path: 'user', component: PostListComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'edit/:id', component: PostEditComponent, resolve: { post: SinglePostResolver } },
    { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver } }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostRoutingModule { }