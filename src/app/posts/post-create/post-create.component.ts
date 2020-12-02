import { Component} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './../post-list/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm): void {
    if (form.invalid)
    {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);
  }

}
