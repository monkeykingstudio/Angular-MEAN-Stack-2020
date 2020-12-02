import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    posts: Post[] = [];
    private postSub: Subscription;

  constructor(public postsService: PostsService) {

  }


  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
      .subscribe(
        (val: Post[]) => {
          this.posts = val;
        }
      );
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

}
