import { Component } from '@angular/core';
import { Address } from '../interfaces/address';
import  { PostService } from '../services/post.service';
import { Post } from  '../interfaces/post';

// Decorators must come directly before the class

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostService ]
})

// After decorator, class should be used
export class UserComponent {
  name: string;
  email: string;
  hobbies: Array<String>;
  address: Address;
  showHobby: boolean;
  posts: Array<Post>;

  constructor(private postService: PostService) {
    this.name = 'Yogesh Singh';
    this.hobbies = ['Guitar', 'Movies', 'Music', 'Cricket'];
    this.email = 'iyogesh21@gmail.com';
    this.showHobby = false;
    this.address = {
      city: 'Hyderabad',
      state: 'Telangana'
    };
    this.posts = [];

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobby = !this.showHobby;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  removeHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
};




