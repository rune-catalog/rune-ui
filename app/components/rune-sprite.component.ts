import { Component, Input } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'rune-sprite',
  template: `<svg>
    <use [attr.xlink:href]="href" />
    </svg>`
})
export class RuneSpriteComponent {
  @Input() colors: Array<string>;

  get href(): string {
    let id: string;
    if (!this.colors || this.colors.length === 0) {
      id = 'colorless';
    } else {
      id = R.map(c => {
        switch (c) {
          case 'White': return 'w';
          case 'Blue': return 'u';
          case 'Black': return 'b';
          case 'Red': return 'r';
          case 'Green': return 'g';
        }
      }, this.colors).join('');
    }

    return `static/img/sprites.svg#${id}`;
  }
}
