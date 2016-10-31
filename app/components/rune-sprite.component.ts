import { Component, Input } from '@angular/core';

@Component({
  selector: 'rune-sprite',
  template: `<svg>
    <use [attr.xlink:href]="href" />
    </svg>`
})
export class RuneSpriteComponent {
  @Input() colors: string;

  get href(): string {
    return `img/sprites.svg#${this.colors}`;
  }
}
