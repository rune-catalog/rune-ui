import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Payload, TYPE_SELECTED_CARD } from './payload';

@Injectable()
export class SelectedCardStore extends FluxStore<string> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): string {
    return null;
  }

  reduce(state: string, action: Action<Payload>): Promise<string> {
    if (action.payload.type === TYPE_SELECTED_CARD) {
      return Promise.resolve(action.payload['name']);
    }

    return Promise.resolve(state);
  }
}
