import { User } from './user';
import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(input: Post) {
    let post = { title: input.title, body: input.body, userId: 1};
    return this.http.post(this.baseURL, post);
  }
  getById(id : number) {
    return this.http.get<Post>('http://localhost:3000/api/posts/'+id);
  }
  
  editPost(input: Post) {
    let post = { title: input.title, body: input.body, id : input.id  };
    return this.http.put(this.baseURL+'/'+input.id, post);
  }

  getByUser(id : number) {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts?userId='+id);
  }
  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
