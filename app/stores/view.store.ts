import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { DispatcherService } from '../services';
import { View } from '../model';
import { ViewChangedPayload } from '../payloads';

@Injectable()
export class ViewStore extends FluxStore<View, ViewChangedPayload> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): View {
    return View.None;
  }

  reduce(state: View, payload: ViewChangedPayload): View {
    if (payload.type == ViewChangedPayload.TYPE) {
      return payload.view;
    }

    return state;
  }
}
