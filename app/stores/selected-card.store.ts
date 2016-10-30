import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { CardService } from '../services/card.service';
import { Payload, TYPE_SELECTED_CARD } from './payload';
import { Card } from '../model/card';

@Injectable()
export class SelectedCardStore extends FluxStore<Card | null> {

  constructor(dispatcher: DispatcherService, private cardService: CardService) {
    super(dispatcher);
  }

  getInitialState(): Card | null {
    return null;
  }

  reduce(state: Card, action: Action<Payload>): Promise<Card> {
    if (action.payload.type === TYPE_SELECTED_CARD) {
      return this.cardService.getCard(action.payload['name']);
    }

    return Promise.resolve(state);
  }
}
