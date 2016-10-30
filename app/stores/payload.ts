export const TYPE_SELECTED_CARD: string = 'selectedCard';
export const TYPE_CARD_SCROLL_POSITION: string = 'cardScrollPosition';
export const TYPE_CARD_LIST_SET: string = 'cardListSet';
export const TYPE_COLLECTION_UPDATE: string = 'collectionUpdate';
export const TYPE_COLLECTION_CHANGE: string = 'collectionChange';

export interface Payload {
  type: string;
  [val: string]: any;
}
