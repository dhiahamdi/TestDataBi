import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post : Post = new Post()
  id : number ;

  constructor(private route: ActivatedRoute,
    private router: Router , private api: PostsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id)
      this.api.getById(this.id).subscribe((data)=>{
        console.log(data)
        this.post = data;
      })
  }

}
