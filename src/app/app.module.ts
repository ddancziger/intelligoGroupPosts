import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import {MdCardModule, MdListModule, MdSidenavModule, MdToolbarModule} from '@angular/material';
import { PostCardComponent } from './components/post-card/post-card.component';
import {PostService} from './services/post.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PostCardComponent,
    NavBarComponent,
    InfiniteScrollDirective,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
