import { Component } from '@angular/core';

@Component({
  selector: 'card-list',
  template: `
    <ol>
      <li *ngFor="let card of cards">{{ card.name }}</li>
    </ol>
    `
})
export class CardListComponent {
  public cards: Array<Card>;

  constructor() {
    this.cards = [ ];
    for (let i = 0; i < 15000; i += 1) {
      this.cards.push({ name: i + '' });
    }
  }
}

class Card {
  name: string;
}
