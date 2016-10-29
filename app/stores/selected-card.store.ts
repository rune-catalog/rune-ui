import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Action, TYPE_SELECTED_CARD } from './action';

@Injectable()
export class SelectedCardStore extends FluxStore<string> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): string {
    return null;
  }

  reduce(state: string, action: Action): Promise<string> {
    if (action.type === TYPE_SELECTED_CARD) {
      return Promise.resolve(action['name']);
    }

    return Promise.resolve(state);
  }
}
