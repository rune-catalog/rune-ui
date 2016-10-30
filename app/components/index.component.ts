import { DispatcherService } from '../services';
import { CardScrollPositionPayload } from '../payloads';
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

  onClick(letter: string): void {
    let payload = new CardScrollPositionPayload();
    payload.cardName = letter;
    this.dispatcher.dispatch(payload);
  }
}
