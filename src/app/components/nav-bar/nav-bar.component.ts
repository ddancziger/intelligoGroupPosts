import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <md-toolbar color="primary">
      <span class="post-count" pull-right>
        Posts
        <span class="badge">{{postsLength}}</span>
      </span>

      <!-- This fills the remaining space of the current row -->
      <span style="flex: 1 1 auto;"></span>

      <span>Created by Daniel Dancziger</span>
    </md-toolbar>
  `,
  styles: [`
    md-toolbar {
      position: fixed;
    }
    .post-count {
      margin: 20px;
      color: white;
      float: right;
    }
    .badge {
      color: #fff!important;
      background-color: #4CAF50 !important;
      border-radius: 50%;
      display: inline-block;
      padding-left: 8px;
      padding-right: 8px;
      text-align: center;
    }
  `]
})
export class NavBarComponent implements OnInit {

  @Input() postsLength: number;
  constructor() { }

  ngOnInit() {
  }

}
