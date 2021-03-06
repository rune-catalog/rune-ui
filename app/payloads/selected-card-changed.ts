import { AbstractPayload } from './payload';

export class SelectedCardChangePayload extends AbstractPayload {
  static get TYPE(): string {
    return SelectedCardChangePayload.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }

  name: string;
}
