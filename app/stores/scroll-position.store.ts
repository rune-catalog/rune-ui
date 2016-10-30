import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { DispatcherService } from '../services';
import { CardScrollPositionPayload } from '../payloads';

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
    return 'a';
  }

  reduce(state: string, action: Action<CardScrollPositionPayload>): Promise<string> {
    if (action.payload.type === CardScrollPositionPayload.TYPE) {
      return Promise.resolve(action.payload.cardName);
    }
    return Promise.resolve(state);
  }
}
