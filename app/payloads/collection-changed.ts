import { AbstractPayload } from './payload';

export class CollectionChangePayload extends AbstractPayload {
  static get TYPE(): string {
    return CollectionChangePayload.constructor.name;
  }

  constructor() {
    super();
    this._type = this.constructor.name;
  }

  collectionSlug: string;
  cardName: string;
  quantity: number;
}
