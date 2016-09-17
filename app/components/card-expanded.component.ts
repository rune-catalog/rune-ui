import { Component, Input } from '@angular/core';

import { Card } from '../model/card';

@Component({
  selector: 'card-expanded',
  template: `
    <h2>{{ card.name }}</h2>
    <p>{{ card.text }}</p>
    `
})
export class CardExpandedComponent {
  @Input() card: Card;
}
