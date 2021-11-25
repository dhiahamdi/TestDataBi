import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'newpost', component: NewPostComponent },
  { path: 'updatepost', component: EditPostComponent },
  { path: 'postdetails', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
