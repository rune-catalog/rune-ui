import { Component, Input } from '@angular/core';
import { Card } from './card-list.component';

@Component({
  selector: 'card-collapsed',
  template: `<h3>{{ card.name }}</h3><span [class]="card.colors"></span>`
})
export class CardCollapsedComponent {
  @Input() card: Card;
}
