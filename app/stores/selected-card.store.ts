import { Injectable } from '@angular/core';
import { FluxReduceStore } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Action, TYPE_SELECTED_CARD } from './action';

@Injectable()
export class SelectedCardStore extends FluxReduceStore<string> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): string {
    return null;
  }

  reduce(state: string, action: Action): string {
    if (action.type === TYPE_SELECTED_CARD) {
      return action['name'];
    }

    return state;
  }
}
