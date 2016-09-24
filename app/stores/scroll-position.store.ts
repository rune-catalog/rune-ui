import { Injectable } from '@angular/core';
import { Dispatcher, FluxReduceStore } from 'flux-lite';
import { Action, TYPE_CARD_SCROLL_POSITION } from '../stores/action';

@Injectable()
export class ScrollPositionStore extends FluxReduceStore<string> {

  constructor(dispatcher: Dispatcher<Action>) {
    super(dispatcher);
  }

  getCurrentIndex(): string {
    let state = this.getState();
    if (state === null) {
      return '#';
    }

    let cardName = this.getState().toLowerCase();
    if (cardName >= 'a' && cardName <= 'z') {
      return cardName[0];
    }

    return '#';
  }

  getInitialState(): string {
    return null;
  }

  reduce(state: string, action: Action): string {
    if (action.type === TYPE_CARD_SCROLL_POSITION) {
      return action['cardName'];
    }
    return state;
  }
}
