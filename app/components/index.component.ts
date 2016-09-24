import { Dispatcher } from 'flux-lite';
import { Action, TYPE_CARD_SCROLL_POSITION } from '../stores/action';
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'rune-index',
  template: `
    <ol class="tk-myriad-pro">
      <li
        *ngFor="let letter of letters"
        [ngClass]="{ active: letter === index }"
        (click)="onClick(letter)">{{ letter }}</li>
    </ol>`
})
export class IndexComponent {
  @Input() index: string;
  private letters: Array<string> = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  constructor(private dispatcher: Dispatcher<Action>) { }

  private onClick(letter: string): void {
    this.dispatcher.dispatch({
      type: TYPE_CARD_SCROLL_POSITION,
      cardName: letter
    });
  }
}
