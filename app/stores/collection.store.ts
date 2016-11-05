import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { CollectionChangePayload, CollectionUpdatePayload } from '../payloads';
import { CollectionService, DispatcherService } from '../services';
import { Collection } from '../model';
import * as R from 'ramda';

@Injectable()
export class CollectionStore extends FluxStore<Array<Collection>> {

  constructor(dispatcher: DispatcherService, private collectionService: CollectionService) {
    super(dispatcher);
  }

  getInitialState(): Array<Collection> {
    return [ ];
  }

  reduce(state: Array<Collection>, action: Action<CollectionUpdatePayload | CollectionChangePayload>): Promise<Array<Collection>> {
    switch (action.payload.type) {
      case CollectionChangePayload.TYPE:
        return this.updateCollection(state, <any>action.payload)
          .then(() => state);
      case CollectionUpdatePayload.TYPE:
        return this.collectionService.getCollections();
      default:
        return Promise.resolve(state);
    }
  }

  private updateCollection(state: Array<Collection>, payload: CollectionUpdatePayload): Promise<null> {
    let collection = state[0];
    let existingEntry = R.find(R.propEq('name', payload.cardName), collection);

    return this.collectionService.updateCollection(
        payload.collectionSlug,
        payload.cardName,
        payload.quantity);
  }
}
