import { Component, Input, ElementRef } from '@angular/core';

import { SelectedCardChangePayload } from '../payloads';
import { DispatcherService } from '../services';
import { Card } from '../model';

@Component({
  selector: 'card-list-item',
  template: `
      <card-expanded *ngIf="isSelected" [card]="card"></card-expanded>
      <card-collapsed *ngIf="!isSelected" [card]="card" (click)="onClick()">
      </card-collapsed>`
})
export class CardListItemComponent {
  @Input() public card: Card;
  @Input() public selectedCard: Card;

  constructor(private dispatcher: DispatcherService, private el: ElementRef) { }

  get boundingBox(): ClientRect {
    return this.el.nativeElement.getBoundingClientRect();
  }

  get isSelected(): boolean {
    return this.selectedCard && this.card.name === this.selectedCard.name;
  }

  onClick(): void {
    let payload = new SelectedCardChangePayload();
    payload.name = this.card.name;
    this.dispatcher.dispatch(payload);
  }
}
