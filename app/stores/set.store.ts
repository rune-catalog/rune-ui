import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { DispatcherService, SetService } from '../services';
import { SetsUpdatedPayload } from '../payloads';
import { Set } from '../model';

@Injectable()
export class SetStore extends FluxStore<Array<Set>> {

  constructor(dispatcher: DispatcherService, private setService: SetService) {
    super(dispatcher);
  }

  getInitialState(): Array<Set> {
    return [ ];
  }

  reduce(state: Array<Set>, action: Action<SetsUpdatedPayload>): Promise<Array<Set>> {
    if (action.payload.type === SetsUpdatedPayload.TYPE) {
      return this.setService.getSets();
    }
    return Promise.resolve(state);
  }
}
