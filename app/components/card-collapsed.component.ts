import { Component, Input } from '@angular/core';
import { Card } from '../model/card';
import * as R from 'ramda';

@Component({
  selector: 'card-collapsed',
  template: `<h3>{{ card.name }}</h3><i [ngClass]="klass"></i>`
})
export class CardCollapsedComponent {
  @Input() card: Card;

  private get klass(): Array<string> {
    return R.concat([ 'icon', 'mana-icon' ], this.card.colors || [ ]);
  }
}
