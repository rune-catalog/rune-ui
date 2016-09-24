import { Component, Input, HostListener, ViewChildren, QueryList, ElementRef, OnChanges } from '@angular/core';
import { CardListItemComponent } from './card-list-item.component';
import { Dispatcher } from 'flux-lite';
import { Action, TYPE_CARD_SCROLL_POSITION } from '../stores/action';
import { Card } from '../model/card';
import * as R from 'ramda';

@Component({
  selector: 'card-list',
  template: `
      <card-list-item #item class="tk-merriweather" *ngFor="let card of cards" [card]="card"></card-list-item>
    `
})
export class CardListComponent implements OnChanges {
  @Input() cards: Array<Card>;
  @Input() index: string;
  @ViewChildren(CardListItemComponent) listItems: QueryList<CardListItemComponent>;

  constructor(private el: ElementRef, private dispatcher: Dispatcher<Action>) { }

  @HostListener('scroll') private onScroll(): void {
    let bb: ClientRect = this.el.nativeElement.getBoundingClientRect();

    let topmostCard = R.find(i => {
      let cbb = i.boundingBox;
      return cbb.top - bb.top <= 0 && cbb.bottom - bb.top > 0;
    }, this.listItems.toArray());

    this.dispatcher.dispatch({
      type: TYPE_CARD_SCROLL_POSITION,
      cardName: topmostCard.card.name
    });
  }

  ngOnChanges(changes): void {
    if (!this.listItems || !changes['index']) {
      return;
    }
    this.scrollTo(changes['index'].currentValue);
  }

  private scrollTo(letter: string): void {
    let firstItemWithLetter = R.find(i => {
      return i.card.name[0].toLowerCase() === letter;
    }, this.listItems.toArray());

    if (firstItemWithLetter) {
      let bb: ClientRect = this.el.nativeElement.getBoundingClientRect();
      let cbb: ClientRect = firstItemWithLetter.boundingBox;

      this.el.nativeElement.scrollTop += cbb.top - bb.top;
    }
  }
}
