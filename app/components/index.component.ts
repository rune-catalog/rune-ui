import { DispatcherService } from '../services/dispatcher.service';
import { Payload, TYPE_CARD_SCROLL_POSITION } from '../stores/payload';
import { Component, Input } from '@angular/core';

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
  letters: Array<string> = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  constructor(private dispatcher: DispatcherService) { }

  private onClick(letter: string): void {
    this.dispatcher.dispatch({
      type: TYPE_CARD_SCROLL_POSITION,
      cardName: letter
    });
  }
}
