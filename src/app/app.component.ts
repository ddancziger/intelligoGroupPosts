import {AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .content {
      left: 320px;
      position: fixed;
      top: 75px;
      right:  0px;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  posts: Post[] = [];
  postSelected: Post;
  constructor(private postService: PostService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.posts = this.postService.getPosts();
    // Fixing an issue on angular 4 on dev mode (generates an error because of the double check)
    this.cdr.detectChanges();
  }

  loadMorePosts() {
    this.posts = [...this.posts, ...this.postService.getPosts(this.posts.length)];
  }

  setPostSelected(post: Post) {
    this.postSelected = post;
  }
}
