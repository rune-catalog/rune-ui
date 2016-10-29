import { Component, Input } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'card-expanded',
  template: `
    <header>
      <h2>{{ card.name }}</h2>
      <i [ngClass]="klass"></i>
    </header>
    <section class="card-details tk-myriad-pro">
      <div class="card-image">
        <div class="row">
          <h6 class="card-type">{{ card.type }}</h6>
          <span class="mana-cost">{{ card.manaCost }}</span>
        </div>
        <p class="card-text">{{ card.text }}</p>
      </div>
      <div class="metadata">
        <span class="collectors-number">{{ card.number }}</span>
      </div>
      <div class="collection">
        <select class="collection">
          <option>Trade Binder</option>
        </select>
        <select class="quantity">
          <option>99</option>
        </select>
      </div>
    </section>
    `
})
export class CardExpandedComponent {
  @Input() card: Card;

  get klass(): Array<string> {
    return [ 'icon', 'mana-icon', this.card.colors ];
  }
}
