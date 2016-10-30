import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CollectionStore, Collection } from '../stores/collection.store';
import { DispatcherService } from '../services/dispatcher.service';
import { TYPE_COLLECTION_UPDATE, TYPE_COLLECTION_CHANGE } from '../stores/payload';
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
          <option *ngFor="let val of quantities" [value]="val">{{ val }}</option>
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

  get quantities(): Array<number> {
    return R.range(0, 26);
  }

  ngOnInit() {
    this.dispatcher.dispatch({ type: TYPE_COLLECTION_UPDATE })
      .then(() => this.collections = this.collectionStore.state);
  }

  private onQuantityChanged(collectionSlug: string, quantity: string): void {
    this.dispatcher.dispatch({
      type: TYPE_COLLECTION_CHANGE,
      collectionSlug,
      cardName: this.card.name,
      quantity
    })
  }
}
