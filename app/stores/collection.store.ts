import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { CollectionChangePayload, CollectionUpdatePayload } from '../payloads';
import { CollectionService, DispatcherService } from '../services';
import { Collection } from '../model';

@Injectable()
export class CollectionStore extends FluxStore<Array<Collection>> {

  constructor(dispatcher: DispatcherService, private collectionService: CollectionService) {
    super(dispatcher);
  }

  getInitialState(): Array<Collection> {
    return [ ];
  }

  reduce(state: Array<Collection>, action: Action<CollectionUpdatePayload | CollectionChangePayload>): Promise<Array<Collection>> {
    if (action.payload instanceof CollectionChangePayload) {
        return this.collectionService.updateCollection(
            action.payload.collectionSlug,
            action.payload.cardName,
            action.payload.quantity)
          .then(() => state);
    }
    switch (action.payload.type) {
      case CollectionUpdatePayload.TYPE:
        return this.collectionService.getCollections();
    }
    return Promise.resolve(state);
  }
}
