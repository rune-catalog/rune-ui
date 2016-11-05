import { Component, Input, OnInit } from '@angular/core';
import { Card, Collection } from '../model';
import { CollectionStore } from '../stores';
import { DispatcherService } from '../services';
import { CollectionChangePayload } from '../payloads';
import * as R from 'ramda';

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
        <select class="collection" #collection>
          <option *ngFor="let collection of collections" [value]="collection.slug">{{ collection.name }}</option>
        </select>
        <select #quantity class="quantity" (change)="onQuantityChanged(collection.value, quantity.value)">
          <option *ngFor="let opt of quantities" [selected]="opt.selected" [value]="opt.val">{{ opt.val }}</option>
        </select>
      </div>
    </section>
    `
})
export class CardExpandedComponent implements OnInit {
  @Input() card: Card;
  collections: Array<Collection>;

  constructor(private dispatcher: DispatcherService, private collectionStore: CollectionStore) { }

  get klass(): Array<string> {
    return [ 'icon', 'mana-icon', this.card.colors ];
  }

  get quantities(): Array<NumericalSelectOption> {
    let selectedCollection = this.collections[0];
    let existingEntry = R.find(R.propEq('name', this.card.name), selectedCollection.cards);
    let existingQuantity = existingEntry
      ? existingEntry.quantity
      : 0;

    return R.map(idx => ({
      selected: idx === existingQuantity,
      val: idx
    }), R.range(0, 26));
  }

  ngOnInit() {
    this.collections = this.collectionStore.state;
  }

  onQuantityChanged(collectionSlug: string, quantity: string): void {
    this.dispatcher.dispatch(new CollectionChangePayload({
      collectionSlug: collectionSlug,
      cardName: this.card.name,
      quantity: parseInt(quantity)
    }));
  }
}

interface NumericalSelectOption {
  selected: boolean;
  val: number;
}
