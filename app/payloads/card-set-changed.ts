import { AbstractPayload } from './payload';

export class CardSetChangePayload extends AbstractPayload {
  static get TYPE(): string {
    return CardSetChangePayload.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }

  setName: string;
}
