import { AbstractPayload } from './payload';

export class CardSetChangePayload extends AbstractPayload {
  static get TYPE(): string {
    return CardSetChangePayload.name;
  }

  constructor(initializer: CardSetChangePayloadInitializer) {
    super();
    this._type = this.constructor.name;
    this.setName = initializer.setName;
  }

  setName: string;
}

export interface CardSetChangePayloadInitializer {
  setName: string;
}
