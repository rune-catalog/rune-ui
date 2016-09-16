import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <div class="rune-content">
      <card-list></card-list>
      <rune-index></rune-index>
    </div>`
})
export class AppComponent { }
