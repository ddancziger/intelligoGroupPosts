import { Injectable } from '@angular/core';
import { POSTS } from '../../posts.data';
@Injectable()
export class PostService {

  constructor() { }

  getPosts(start = 0, len = 10) {
    let until = start + len;
    if (until > POSTS.length) {
      until = POSTS.length;
    }
    return POSTS.slice(start, until);
  }
}
