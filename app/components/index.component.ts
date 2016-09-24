import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'rune-index',
  template: `
    <ol>
      <li *ngFor="let letter of letters" [ngClass]="{ active: letter === index }">{{ letter }}</li>
    </ol>`
})
export class IndexComponent {
  @Input() index: string;
  private letters: Array<string> = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
}
