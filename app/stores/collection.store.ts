import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { Payload, TYPE_COLLECTION_UPDATE } from './payload';
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
    if (action.payload.type === TYPE_COLLECTION_UPDATE) {
      return this.collectionService.getCollections();
    }
    return Promise.resolve(state);
  }
}

export interface Collection {
  name: string;
  slug: string;
}
