
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
