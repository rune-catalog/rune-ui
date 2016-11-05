import { AbstractPayload } from './payload';

export class SetsUpdatedPayload extends AbstractPayload {

  static get TYPE(): string {
    return SetsUpdatedPayload.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }
}
