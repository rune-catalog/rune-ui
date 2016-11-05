import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { DispatcherService } from '../services';
import { View } from '../model';
import { ViewChangedPayload } from '../payloads';

@Injectable()
export class ViewStore extends FluxStore<View> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): View {
    return View.None;
  }

  reduce(state: View, action: Action<ViewChangedPayload>): Promise<View> {
    if (action.payload.type == ViewChangedPayload.TYPE) {
      return Promise.resolve(action.payload.view);
    }

    return Promise.resolve(state);
  }
}
