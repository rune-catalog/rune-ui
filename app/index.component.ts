import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'rune-index',
  template: `
    <ol>
      <li *ngFor="let letter of letters">{{ letter }}</li>
    </ol>`
})
export class IndexComponent {
  private letters: Array<string> = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
}
