import { Component, DoCheck, OnInit } from '@angular/core';
import { DispatcherService } from '../services/dispatcher.service';
import { Action, TYPE_CARD_LIST_SET } from '../stores/action';
import { SelectedCardStore } from '../stores/selected-card.store';
import { ScrollPositionStore } from '../stores/scroll-position.store';
import { CardListStore } from '../stores/card-list.store';
import { Card } from '../model/card';

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
  selectedCard: string;
  topCardName: string;
  cards: Array<Card>;

  constructor(
      private selectedCardStore: SelectedCardStore,
      private cardScrollPositionStore: ScrollPositionStore,
      private cardListStore: CardListStore,
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.dispatch({
      type: TYPE_CARD_LIST_SET,
      setName: 'ody'
    })
  }

  ngDoCheck(): void {
    this.cards = this.cardListStore.state;
    this.selectedCard = this.selectedCardStore.state;
    this.topCardName = this.cardScrollPositionStore.getCurrentIndex();
  }
}
