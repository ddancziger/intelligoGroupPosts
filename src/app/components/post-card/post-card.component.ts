import {Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-card',
  template: `
    <md-card>
      <md-card-title>{{post?.title}}</md-card-title>
      <span>{{post?.id}}</span>
    </md-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
