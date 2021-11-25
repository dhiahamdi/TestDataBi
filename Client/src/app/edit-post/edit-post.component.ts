import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../post-service.service';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post = new Post();
  id : number ;
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
 
  constructor(private api: PostsService,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id)
      this.api.getById(this.id).subscribe((data)=>{
        this.post = data;
      })
    
  }
  editPost(e) {
    e.preventDefault();
    if(this.post.title && this.post.body)
    this.api.editPost(this.post).subscribe((data) => {
      console.log(data);
      this.msg = "Changes saved successfuly "
      setTimeout(()=>{
        this.router.navigate(['/']);
      } , 2000)
      
    });
  }
}
