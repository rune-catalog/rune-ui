import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { DispatcherService } from '../services/dispatcher.service';
import { Action, TYPE_CARD_SCROLL_POSITION } from '../stores/action';

@Injectable()
export class ScrollPositionStore extends FluxStore<string> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getCurrentIndex(): string {
    let state = this.state;
    if (state === null) {
      return '#';
    }

    let cardName = this.state.toLowerCase();
    if (cardName >= 'a' && cardName <= 'z') {
      return cardName[0];
    }

    return '#';
  }

  getInitialState(): string {
    return null;
  }

  reduce(state: string, action: Action): Promise<string> {
    if (action.type === TYPE_CARD_SCROLL_POSITION) {
      return Promise.resolve(action['cardName']);
    }
    return Promise.resolve(state);
  }
}
