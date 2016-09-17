import { Component, Input } from '@angular/core';

import { Card } from '../model/card';
import { SelectedCardService } from '../services/selected-card.service';

@Component({
  selector: 'card-list-item',
  template: `
      <card-expanded *ngIf="isSelected" [card]="card"></card-expanded>
      <card-collapsed *ngIf="!isSelected" [card]="card" (click)="selectCard()">
      </card-collapsed>`
})
export class CardListItemComponent {
  @Input() public card: Card;

  constructor(private selectedCardService: SelectedCardService) { }

  private get isSelected(): boolean {
    return this.selectedCardService.isSelected(this.card);
  }

  private selectCard(): void {
    this.selectedCardService.selectCard(this.card);
  }
}
