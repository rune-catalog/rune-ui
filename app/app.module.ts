/// <reference path="../globals.d.ts" />

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  RuneSearchComponent,
  RuneLoginComponent,
  RuneCollectionComponent
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
  provideUserService,
  StoreInitializerService
} from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'login', component: RuneLoginComponent },
        { path: '', component: RuneCollectionComponent }
    ])
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
    RuneSearchComponent,
    RuneCollectionComponent,
    RuneLoginComponent
  ],
  providers: [
    provideCardSetService(AppConfig.cardService),
    provideCardService(AppConfig.cardService),
    provideCollectionService(AppConfig.collectionService),
    provideSetService(AppConfig.cardService),
    provideUserService(AppConfig.userService),
    AuthTokenService,
    StoreInitializerService,
    CardListStore,
    CollectionStore,
    CurrentUserStore,
    DispatcherService,
    ScrollPositionStore,
    SelectedCardStore,
    SetStore,
    ViewStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
