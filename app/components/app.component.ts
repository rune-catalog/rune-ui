import {
  ScrollPositionStore,
  SelectedCardStore,
  CardListStore,
  CollectionStore
} from '../stores';
import { Component, DoCheck, OnInit } from '@angular/core';
import { DispatcherService } from '../services';
import {
  CardSetChangePayload,
  CollectionUpdatePayload
} from '../payloads';
import { Card } from '../model';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <div class="rune-content">
      <card-list [cards]="cards" [index]="topCardName" [selectedCard]="selectedCard"></card-list>
      <rune-index [index]="topCardName"></rune-index>
    </div>`
})
export class AppComponent implements DoCheck, OnInit {
  selectedCard: Card | null;
  topCardName: string;
  cards: Array<Card>;

  constructor(
      private selectedCardStore: SelectedCardStore,
      private cardScrollPositionStore: ScrollPositionStore,
      private cardListStore: CardListStore,
      collectionStore: CollectionStore, // Inject to initialize the store before events start dispatching
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    let payload = new CardSetChangePayload();
    payload.setName = 'ody';
    this.dispatcher.dispatch(payload)
      .then(() => this.cards = this.cardListStore.state);

    let collectionsPayload = new CollectionUpdatePayload();
    this.dispatcher.dispatch(collectionsPayload);
  }

  ngDoCheck(): void {
    this.cards = this.cardListStore.state;
    this.selectedCard = this.selectedCardStore.state;
    this.topCardName = this.cardScrollPositionStore.getCurrentIndex();
  }
}
