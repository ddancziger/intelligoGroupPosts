import {Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models/post.model';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [`
    md-sidenav-container {
      position: fixed;
      min-height: 90% !important;
      width: 300px;
      top: 75px;
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {

  @Input() posts: Post[];
  @Output() onScroll: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPostSelected: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  onScrollEmitted() {
    this.onScroll.emit();
  }

  onPostClicked(post: Post) {
    this.onPostSelected.emit(post);
  }
  ngOnInit() {
  }
}
