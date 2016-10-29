import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Payload, TYPE_CARD_LIST_SET, TYPE_SELECTED_CARD } from '../stores/payload';
import { Card } from '../model/card';
import { CardSetService } from '../services/card-set.service';
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

  reduce(state: Array<Card>, action: Action<Payload>): Promise<Array<Card>> {
    switch (action.payload.type) {
      case TYPE_CARD_LIST_SET:
        return this.getCardList(action);
      case TYPE_SELECTED_CARD:
        return this.setSelectedCard(state, action);
      default:
        return Promise.resolve(state);
    }
  }

  private setSelectedCard(state: Array<Card>, action: Action<Payload>): Promise<Array<Card>> {
      return this.dispatcher.waitFor([ this.selectedCardStore.dispatchToken ], action)
        .then(() => {
          let selectedCard = this.selectedCardStore.state;
          return R.map(card => selectedCard && selectedCard.name == card.name ? selectedCard : card, state);
        });
  }

  private getCardList(action: Action<Payload>): Promise<Array<Card>> {
    return this.setService.getSet(action.payload['setName'])
      .then(set => R.map(apiCard => <any>({
        name: apiCard.name,
        colors: apiCard.colors
      }), set.cards))
      .then(set => R.sortBy(R.prop('name'), set));
  }
}
