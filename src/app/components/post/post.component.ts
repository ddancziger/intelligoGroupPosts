import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post',
  template: `
    <md-card>
      <md-card-title>{{post ? post.title : noPostString}}</md-card-title>
      <md-card-subtitle>{{post?.id}}</md-card-subtitle>
      <md-card-content>
        {{post?.content}}
      </md-card-content>
    </md-card>
  ` ,
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  noPostString = 'No post was selected';
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
