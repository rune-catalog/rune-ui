import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { Payload, TYPE_COLLECTION_UPDATE, TYPE_COLLECTION_CHANGE } from './payload';
import { DispatcherService } from '../services/dispatcher.service';
import { CollectionService } from '../services/collection.service';

@Injectable()
export class CollectionStore extends FluxStore<Array<Collection>> {

  constructor(dispatcher: DispatcherService, private collectionService: CollectionService) {
    super(dispatcher);
  }

  getInitialState(): Array<Collection> {
    return [ ];
  }

  reduce(state: Array<Collection>, action: Action<Payload>): Promise<Array<Collection>> {
    switch (action.payload.type) {
      case TYPE_COLLECTION_UPDATE:
        return this.collectionService.getCollections();
      case TYPE_COLLECTION_CHANGE:
        this.collectionService.updateCollection(action.payload['collectionSlug'], action.payload['cardName'], action.payload['quantity'])
          .then(() => state);
    }
    return Promise.resolve(state);
  }
}

export interface Collection {
  name: string;
  slug: string;
}
