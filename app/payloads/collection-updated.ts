import { AbstractPayload } from './payload';

export class CollectionUpdatePayload extends AbstractPayload {
  static get TYPE(): string {
    return CollectionUpdatePayload.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }
}
