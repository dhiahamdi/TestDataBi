import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../post-service.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Object;
  users : Object;
  selected_user : number = 0 ;

  constructor(
    private api: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.api.getPosts().subscribe((data) => {
      this.posts = data;
    });
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
  btnClick = function (post: Post) {
    this.router.navigate(['/updatepost', { id: post.id }]);
    console.log(post);
  };
  goDetails = function (post: Post) {
    this.router.navigate(['/postdetails', { id: post.id }]);
    console.log(post);
  };
  onFilter = function (selected_user : number){
    console.log(selected_user)
    this.api.getByUser(selected_user).subscribe((data) => {
      this.posts = data;
    });
  }
}
