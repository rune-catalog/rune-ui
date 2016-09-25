import { Component, Input, ElementRef } from '@angular/core';

import { Action, TYPE_SELECTED_CARD } from '../stores/action';
import { DispatcherService } from '../services/dispatcher.service';
import { Card } from '../model/card';

@Component({
  selector: 'card-list-item',
  template: `
      <card-expanded *ngIf="isSelected" [card]="card"></card-expanded>
      <card-collapsed *ngIf="!isSelected" [card]="card" (click)="onClick()">
      </card-collapsed>`
})
export class CardListItemComponent {
  @Input() public card: Card;
  @Input() public selectedCard: string;

  constructor(private dispatcher: DispatcherService, private el: ElementRef) { }

  public get boundingBox(): ClientRect {
    return this.el.nativeElement.getBoundingClientRect();
  }

  get isSelected(): boolean {
    return this.card.name === this.selectedCard;
  }

  private onClick(): void {
    this.dispatcher.dispatch({
      type: TYPE_SELECTED_CARD,
      name: this.card.name
    });
  }
}
