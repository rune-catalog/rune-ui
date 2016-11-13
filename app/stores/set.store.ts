import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { DispatcherService, SetService } from '../services';
import { SetsUpdatedPayload } from '../payloads';
import { Set } from '../model';

@Injectable()
export class SetStore extends FluxStore<Array<Set>, SetsUpdatedPayload> {

  constructor(dispatcher: DispatcherService, private setService: SetService) {
    super(dispatcher);
  }

  getInitialState(): Array<Set> {
    return [ ];
  }

  reduce(state: Array<Set>, payload: SetsUpdatedPayload): Promise<Array<Set>> | Array<Set> {
    if (payload.type === SetsUpdatedPayload.TYPE) {
      return this.setService.getSets();
    }
    return state;
  }
}
