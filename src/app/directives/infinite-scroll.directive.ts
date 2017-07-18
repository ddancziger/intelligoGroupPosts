import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const tracker: any = event.target;
    const limit: number = tracker.scrollHeight - tracker.clientHeight;
    if (tracker.scrollTop === limit) {
     this.onScrollToBottom.emit();
    }
  }

  @Output() onScrollToBottom: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

}
