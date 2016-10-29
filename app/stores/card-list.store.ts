import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Payload, TYPE_CARD_LIST_SET } from '../stores/payload';
import { Card } from '../model/card';
import { CardSetService } from '../services/card-set.service';
import * as R from 'ramda';

@Injectable()
export class CardListStore extends FluxStore<Array<Card>> {

  constructor(dispatcher: DispatcherService, private setService: CardSetService) {
    super(dispatcher);
  }

  getInitialState(): Array<Card> {
    return [ ];
  }

  reduce(state: Array<Card>, action: Action<Payload>): Promise<Array<Card>> {
    switch (action.payload.type) {
      case TYPE_CARD_LIST_SET:
        return this.setService.getSet(action.payload['setName'])
          .then(set => R.map(apiCard => <any>({
            name: apiCard.name, colors: apiCard.colors
          }), set.cards));
      default:
        return Promise.resolve(state);
    }
  }

  private sortByName(): (cards: Array<Card>) => Array<Card> {
    return R.sort(
        (a: Card, b: Card) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
  }
}
