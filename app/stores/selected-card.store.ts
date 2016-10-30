import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { CardService, DispatcherService } from '../services';
import { SelectedCardChangePayload } from '../payloads';
import { Card } from '../model';

@Injectable()
export class SelectedCardStore extends FluxStore<Card | null> {

  constructor(dispatcher: DispatcherService, private cardService: CardService) {
    super(dispatcher);
  }

  getInitialState(): Card | null {
    return null;
  }

  reduce(state: Card, action: Action<SelectedCardChangePayload>): Promise<Card> {
    if (action.payload.type === SelectedCardChangePayload.TYPE) {
      return this.cardService.getCard(action.payload.name);
    }

    return Promise.resolve(state);
  }
}
