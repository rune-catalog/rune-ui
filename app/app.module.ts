/// <reference path="../globals.d.ts" />

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
  provideCardSetService,
  provideCardService,
  provideCollectionService
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
    provideCardSetService(AppConfig.cardService),
    provideCardService(AppConfig.cardService),
    SelectedCardStore,
    ScrollPositionStore,
    CardListStore,
    provideCollectionService(AppConfig.collectionService),
    CollectionStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
