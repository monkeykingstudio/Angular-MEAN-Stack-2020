import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    // posts = [
    //   {title: 'post un', content: 'post numéro un'},
    //   {title: 'post deux', content: 'post numéro deux'},
    //   {title: 'post trois', content: 'post numéro trois'}
    // ];

    @Input() posts: Post[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
