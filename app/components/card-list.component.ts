import { Component, DoCheck } from '@angular/core';

import { Card } from '../model/card';
import { CardsService } from '../services/cards.service';
import { SelectedCardStore } from '../stores/selected-card.store';

@Component({
  selector: 'card-list',
  template: `
      <card-list-item *ngFor="let card of cards" [card]="card" [selectedCard]="selectedCard">
      </card-list-item>
    `
})
export class CardListComponent implements DoCheck {
  public cards: Array<Card>;
  public selectedCard: string;

  constructor(cardsService: CardsService,
    private selectedCardStore: SelectedCardStore) {

    this.cards = cardsService.cards;
  }

  ngDoCheck(): void {
    this.selectedCard = this.selectedCardStore.getState();
  }
}
