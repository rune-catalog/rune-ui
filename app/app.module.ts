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
  SetStore,
  CurrentUserStore
} from './stores';

import {
  DispatcherService,
  AuthTokenService,
  provideCardSetService,
  provideCardService,
  provideCollectionService,
  provideSetService,
  provideUserService
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
    AuthTokenService,
    DispatcherService,
    provideCardSetService(AppConfig.cardService),
    provideCardService(AppConfig.cardService),
    SelectedCardStore,
    ScrollPositionStore,
    CardListStore,
    provideCollectionService(AppConfig.collectionService),
    provideSetService(AppConfig.cardService),
    provideUserService(AppConfig.userService),
    CollectionStore,
    ViewStore,
    SetStore,
    CurrentUserStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
