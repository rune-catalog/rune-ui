import {
  ScrollPositionStore,
  SelectedCardStore,
  CardListStore,
  CollectionStore,
  ViewStore,
  SetStore
} from '../stores';
import { Component, DoCheck, OnInit } from '@angular/core';
import { DispatcherService } from '../services';
import {
  CardSetChangePayload,
  CollectionUpdatePayload,
  SetsUpdatedPayload
} from '../payloads';
import { Card, View } from '../model';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <rune-search *ngIf="showSearch"></rune-search>
    <div class="rune-content">
      <card-list [cards]="cards" [index]="topCardName" [selectedCard]="selectedCard"></card-list>
      <rune-index [index]="topCardName"></rune-index>
    </div>`
})
export class AppComponent implements DoCheck, OnInit {
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
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    let payload = new CardSetChangePayload();
    payload.setName = 'ody';
    this.dispatcher.dispatch(payload)
      .then(() => this.cards = this.cardListStore.state);

    this.dispatcher.dispatch(new CollectionUpdatePayload());
    this.dispatcher.dispatch(new SetsUpdatedPayload());
  }

  ngDoCheck(): void {
    this.cards = this.cardListStore.state;
    this.selectedCard = this.selectedCardStore.state;
    this.topCardName = this.cardScrollPositionStore.getCurrentIndex();
    this.view = this.viewStore.state;
  }

  get showSearch(): boolean {
    return this.view === View.Search;
  }
}
