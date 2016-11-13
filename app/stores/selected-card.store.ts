import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { CardService, DispatcherService } from '../services';
import { SelectedCardChangePayload } from '../payloads';
import { Card } from '../model';

@Injectable()
export class SelectedCardStore extends FluxStore<Card | null, SelectedCardChangePayload> {

  constructor(dispatcher: DispatcherService, private cardService: CardService) {
    super(dispatcher);
  }

  getInitialState(): Card | null {
    return null;
  }

  reduce(state: Card, payload: SelectedCardChangePayload): Promise<Card> | Card {
    if (payload.type === SelectedCardChangePayload.TYPE) {
      return this.cardService.getCard(payload.name);
    }

    return state;
  }
}
