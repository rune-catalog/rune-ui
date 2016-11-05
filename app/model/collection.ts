export interface Collection {
  name: string;
  slug: string;
  cards: Array<CollectionCard>;
}

export interface CollectionCard {
  name: string;
  quantity: number;
}
