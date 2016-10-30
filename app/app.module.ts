import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {
  AppComponent,
  HeaderComponent,
  IndexComponent,
  CardListComponent,
  CardListItemComponent,
  CardCollapsedComponent,
  CardExpandedComponent,
  LazyScrollDirective,
  RuneSpriteComponent
} from './components';

import {
  SelectedCardStore,
  ScrollPositionStore,
  CardListStore,
  CollectionStore
} from './stores';

import {
  DispatcherService,
  CardSetService,
  CardService,
  CollectionService
} from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardListComponent,
    CardListItemComponent,
    CardCollapsedComponent,
    CardExpandedComponent,
    LazyScrollDirective,
    RuneSpriteComponent
  ],
  providers: [
    DispatcherService,
    CardSetService,
    CardService,
    SelectedCardStore,
    ScrollPositionStore,
    CardListStore,
    CollectionService,
    CollectionStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
