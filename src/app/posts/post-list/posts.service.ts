import { Injectable,  } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Post } from '../post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(): Post[] {
    return [...this.posts];
  }

  getPostUpdateListener(): Observable<Post[]> {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string): void {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

}
