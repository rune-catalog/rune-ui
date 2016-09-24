import { Component, DoCheck } from '@angular/core';
import { SelectedCardStore } from '../stores/selected-card.store';
import { ScrollPositionStore } from '../stores/scroll-position.store';
import { CardListStore } from '../stores/card-list.store';
import { Card } from '../model/card';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <div class="rune-content">
      <card-list [cards]="cards" [index]="topCardName"></card-list>
      <rune-index [index]="topCardName"></rune-index>
    </div>`
})
export class AppComponent implements DoCheck {
  private selectedCard: string;
  private topCardName: string;
  private cards: Array<Card>;

  constructor(
      private selectedCardStore: SelectedCardStore,
      private cardScrollPositionStore: ScrollPositionStore,
      private cardListStore: CardListStore) { }

  ngDoCheck(): void {
    this.cards = this.cardListStore.getState();
    this.selectedCard = this.selectedCardStore.getState();
    this.topCardName = this.cardScrollPositionStore.getCurrentIndex();
  }
}
