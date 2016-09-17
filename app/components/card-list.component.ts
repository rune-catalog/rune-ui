import { Component } from '@angular/core';

import { CardsService } from './cards.service';

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

export class Card {
  name: string;
  colors: Array<string>;
  text: string;
}
