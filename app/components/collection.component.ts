import {
  ScrollPositionStore,
  SelectedCardStore,
  CardListStore,
  CollectionStore,
  ViewStore,
  SetStore,
  CurrentUserStore
} from '../stores';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DispatcherService } from '../services';
import {
  CollectionUpdatePayload,
  SetsUpdatedPayload
} from '../payloads';
import { Card, View } from '../model';

@Component({
  selector: 'rune-collection',
  template: `
    <rune-header></rune-header>
    <rune-search *ngIf="showSearch"></rune-search>
    <div class="rune-content">
      <card-list [cards]="cards" [index]="topCardName" [selectedCard]="selectedCard"></card-list>
      <rune-index [index]="topCardName"></rune-index>
    </div>`
})
export class RuneCollectionComponent implements DoCheck, OnInit {
  selectedCard: Card | null;
  topCardName: string;
  cards: Array<Card>;
  view: View;

  constructor(
      private selectedCardStore: SelectedCardStore,
      private cardScrollPositionStore: ScrollPositionStore,
      private cardListStore: CardListStore,
      private viewStore: ViewStore,
      setStore: SetStore,
      collectionStore: CollectionStore, // Inject to initialize the store before events start dispatching
      private dispatcher: DispatcherService,
      private currentUserStore: CurrentUserStore,
      private router: Router) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new CollectionUpdatePayload());
    this.dispatcher.dispatch(new SetsUpdatedPayload());
  }

  ngDoCheck(): void {
    this.cards = this.cardListStore.state;
    this.selectedCard = this.selectedCardStore.state;
    this.topCardName = this.cardScrollPositionStore.getCurrentIndex();
    this.view = this.viewStore.state;

    if (this.currentUserStore.state === null) {
      this.router.navigate([ 'login' ]);
    }
  }

  get showSearch(): boolean {
    return this.view === View.Search;
  }
}
