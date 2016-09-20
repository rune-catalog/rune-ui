import { Injectable } from '@angular/core';
import { FluxReduceStore, Dispatcher } from 'flux-lite';
import { Action, TYPE_SELECTED_CARD } from './action';

@Injectable()
export class SelectedCardStore extends FluxReduceStore<string> {

  constructor(dispatcher: Dispatcher<Action>) {
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
