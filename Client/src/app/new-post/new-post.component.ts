import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post-service.service';
import { Post } from '../post';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  post = new Post();
  posts:Post[] ; 
  form = new FormGroup({});
  msg : string ="";
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Post title',
        placeholder: 'Enter the post title ..',
        required: true,
      }
    },
    {
      key: 'body',
      type: 'textarea',
      templateOptions: {
        label: 'Post content',
        placeholder: 'Enter the post content ..',
        rows : 8 ,
        required: true,
      }
    }
  ];
  
  constructor(private api: PostsService , private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((posts)=>{
      this.posts = posts;
    })
  }
  
  addPost(post : Post , e) {
    e.preventDefault();
    this.msg = "" ;
    if(this.post.title && this.post.body)
    this.api.addPost(this.post).subscribe((data) => {
      console.log(data);
      this.msg = "Post created successfuly"
      setTimeout(()=>{
        this.router.navigate(['/']);
      } , 2000)
    });
  }
}
