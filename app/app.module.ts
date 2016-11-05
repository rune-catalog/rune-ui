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
  RuneSpriteComponent,
  RuneSearchComponent
} from './components';

import {
  SelectedCardStore,
  ScrollPositionStore,
  CardListStore,
  CollectionStore,
  ViewStore,
  SetStore
} from './stores';

import {
  DispatcherService,
  provideCardSetService,
  provideCardService,
  provideCollectionService,
  provideSetService
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
    RuneSpriteComponent,
    RuneSearchComponent
  ],
  providers: [
    DispatcherService,
    provideCardSetService(AppConfig.cardService),
    provideCardService(AppConfig.cardService),
    SelectedCardStore,
    ScrollPositionStore,
    CardListStore,
    provideCollectionService(AppConfig.collectionService),
    provideSetService(AppConfig.cardService),
    CollectionStore,
    ViewStore,
    SetStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
