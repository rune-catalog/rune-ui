export const TYPE_SELECTED_CARD: string = 'selectedCard';
export const TYPE_CARD_SCROLL_POSITION: string = 'cardScrollPosition';
export const TYPE_CARD_LIST_SET: string = 'cardListSet';

export interface Action {
  type: string;
  [val: string]: any;
}
