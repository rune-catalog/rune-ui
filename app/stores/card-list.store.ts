import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService, CardSetService } from '../services';
import { CardSetChangePayload, SelectedCardChangePayload } from '../payloads';
import { Card } from '../model';
import { SelectedCardStore } from './selected-card.store';
import * as R from 'ramda';

@Injectable()
export class CardListStore extends FluxStore<Array<Card>> {

  constructor(
      dispatcher: DispatcherService,
      private setService: CardSetService,
      private selectedCardStore: SelectedCardStore) {
    super(dispatcher);
  }

  getInitialState(): Array<Card> {
    return [ ];
  }

  reduce(state: Array<Card>, action: Action<CardSetChangePayload | SelectedCardChangePayload>): Promise<Array<Card>> {
    switch (action.payload.type) {
      case CardSetChangePayload.TYPE:
        return this.getCardList(<any>action);
      case SelectedCardChangePayload.TYPE:
        return this.setSelectedCard(state, <any>action);
      default:
        return Promise.resolve(state);
    }
  }

  private setSelectedCard(state: Array<Card>, action: Action<SelectedCardChangePayload>): Promise<Array<Card>> {
      return this.dispatcher.waitFor([ this.selectedCardStore.dispatchToken ], action)
        .then(() => {
          let selectedCard = this.selectedCardStore.state;
          return R.map(card => selectedCard && selectedCard.name == card.name ? selectedCard : card, state);
        });
  }

  private getCardList(action: Action<CardSetChangePayload>): Promise<Array<Card>> {
    return this.setService.getSet(action.payload.setName)
      .then(set => R.map(apiCard => <any>({
        name: apiCard.name,
        colors: apiCard.colors
      }), set.cards))
      .then(set => R.sortBy(R.prop('name'), set));
  }
}
