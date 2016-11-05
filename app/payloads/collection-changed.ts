import { AbstractPayload } from './payload';

export class CollectionChangePayload extends AbstractPayload {
  static get TYPE(): string {
    return CollectionChangePayload.name;
  }

  constructor(initializer: CollectionChangeInitializer) {
    super();
    this._type = this.constructor.name;
    this.collectionSlug = initializer.collectionSlug;
    this.cardName = initializer.cardName;
    this.quantity = initializer.quantity;
  }

  collectionSlug: string;
  cardName: string;
  quantity: number;
}

interface CollectionChangeInitializer {
  collectionSlug: string;
  cardName: string;
  quantity: number;
}
