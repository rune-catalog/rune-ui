import { Component } from '@angular/core';

@Component({
  selector: 'card-list',
  template: `
      <card-list-item *ngFor="let card of cards" [card]="card"></card-list-item>
    `
})
export class CardListComponent {
  public cards: Array<Card>;

  constructor() {
    this.cards = [ ];
    for (let i = 0; i < 150; i += 1) {
      this.cards.push({
        name: i + '',
        colors: [ "Black" ]
      });
    }
  }
}

export class Card {
  name: string;
  colors: Array<string>;
}
