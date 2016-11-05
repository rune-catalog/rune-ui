import { AbstractPayload } from './payload';
import { View } from '../model';

export class ViewChangedPayload extends AbstractPayload {
  static get TYPE(): string {
    return ViewChangedPayload.name;
  }

  constructor(initializer: ViewChangedPayloadInitializer) {
    super();
    this._type = this.constructor.name;
    this.view = initializer.view;
  }

  view: View;
}

export interface ViewChangedPayloadInitializer {
  view: View;
}
