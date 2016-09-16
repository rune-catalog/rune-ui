import { Component, Input } from '@angular/core';
import { Card } from './card-list.component';

@Component({
  selector: 'card-list-item',
  template: `<h3>{{ card.name }}</h3><span [class]="card.colors"></span>`
})
export class CardListItemComponent {
  @Input() public card: Card;
}
