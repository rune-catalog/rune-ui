import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <div class="rune-content">
      <div class="rune-inner-content">
        <div class="scroll-cell">
          <div class="tall">Very tall div</div>
        </div>
      </div>
      <rune-index></rune-index>
    </div>`
})
export class AppComponent { }
