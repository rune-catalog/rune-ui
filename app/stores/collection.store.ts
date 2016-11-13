import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { CollectionChangePayload, CollectionUpdatePayload } from '../payloads';
import { CollectionService, DispatcherService } from '../services';
import { Collection } from '../model';

@Injectable()
export class CollectionStore extends FluxStore<Array<Collection>, CollectionUpdatePayload | CollectionChangePayload> {

  constructor(dispatcher: DispatcherService, private collectionService: CollectionService) {
    super(dispatcher);
  }

  getInitialState(): Array<Collection> {
    return [ ];
  }

  reduce(state: Array<Collection>, payload: CollectionUpdatePayload | CollectionChangePayload): Promise<Array<Collection>> {
    switch (payload.type) {
      case CollectionChangePayload.TYPE:
        return this.updateCollection(state, <any>payload)
          .then(() => state);
      case CollectionUpdatePayload.TYPE:
        return this.collectionService.getCollections();
      default:
        return Promise.resolve(state);
    }
  }

  private updateCollection(state: Array<Collection>, payload: CollectionChangePayload): Promise<null> {
    return this.collectionService.updateCollection(
        payload.collectionSlug,
        payload.cardName,
        payload.quantity);
  }
}
