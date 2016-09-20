import { IAction } from './action';

export class SelectedCardAction implements IAction {

  static TYPE: string = 'selectedCard';

  type: string;

  private _name: string;

  constructor(name: string) {
    this.type = SelectedCardAction.TYPE;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}
