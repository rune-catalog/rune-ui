import { Injectable } from '@angular/core';
import {
  CardListStore,
  CollectionStore,
  CurrentUserStore,
  ScrollPositionStore,
  SelectedCardStore,
  SetStore,
  ViewStore
} from '../stores';

@Injectable()
export class StoreInitializerService {

  constructor(
      cardList: CardListStore,
      collection: CollectionStore,
      currentUser: CurrentUserStore,
      scrollPosition: ScrollPositionStore,
      selectedCard: SelectedCardStore,
      set: SetStore,
      view: ViewStore) { }
}
