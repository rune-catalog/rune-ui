import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { DispatcherService } from '../services';
import { CardScrollPositionPayload } from '../payloads';

@Injectable()
export class ScrollPositionStore extends FluxStore<string, CardScrollPositionPayload> {

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

  reduce(state: string, payload: CardScrollPositionPayload): string {
    if (payload.type === CardScrollPositionPayload.TYPE) {
      return payload.cardName;
    }
    return state;
  }
}
