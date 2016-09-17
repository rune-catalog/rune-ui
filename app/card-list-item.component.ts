import { Component, Input } from '@angular/core';
import { Card } from './card-list.component';
import { SelectedCardService } from './selected-card.service';

@Component({
  selector: 'card-list-item',
  template: `
    <div [ngSwitch]="isSelected">
      <card-expanded *ngSwitchCase="true" [card]="card"></card-expanded>
      <card-collapsed *ngSwitchDefault [card]="card" (click)="selectCard()">
      </card-collapsed>
    </div>`
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
