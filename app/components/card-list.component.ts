import { Component } from '@angular/core';

import { Card } from '../model/card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'card-list',
  template: `
      <card-list-item *ngFor="let card of cards" [card]="card">
      </card-list-item>
    `
})
export class CardListComponent {
  public cards: Array<Card>;

  constructor(cardsService: CardsService) {
    this.cards = cardsService.cards;
  }
}
