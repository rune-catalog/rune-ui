import { Component } from '@angular/core';
import { SelectedCardStore } from '../stores/selected-card.store';

@Component({
  selector: 'my-app',
  template: `
    <rune-header></rune-header>
    <div class="rune-content">
      <card-list></card-list>
      <rune-index></rune-index>
    </div>`
})
export class AppComponent {
  constructor(private selectedCardStore: SelectedCardStore) { }
}
