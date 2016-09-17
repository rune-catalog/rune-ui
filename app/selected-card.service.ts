import { Injectable } from '@angular/core';

import { Card } from './card-list.component';

@Injectable()
export class SelectedCardService {
  private selectedCardName: string;

  selectCard(card: Card): void {
    this.selectedCardName = card.name;
  }

  isSelected(card: Card): boolean {
    return this.selectedCardName === card.name;
  }
}
