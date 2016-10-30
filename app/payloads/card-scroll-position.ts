import { AbstractPayload } from './payload';

export class CardScrollPositionPayload extends AbstractPayload {
  static get TYPE(): string {
    return CardScrollPositionPayload.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }

  cardName: string;
}
