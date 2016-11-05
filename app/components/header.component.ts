import { Component } from '@angular/core';
import { DispatcherService } from '../services';
import { ViewChangedPayload } from '../payloads';
import { View } from '../model';

@Component({
  selector: 'rune-header',
  template: `
    <h1 class="tk-merriweather">RUNE</h1>
    <a><i class="icon icon-search"></i></a>
    <a><i class="icon icon-add"></i></a>
    <span class="divider"></span>
    <rune-sprite (click)="onSearchClick()" [colors]="'search'"></rune-sprite>`
})
export class HeaderComponent {

  constructor(private dispatcher: DispatcherService) {  }

  onSearchClick(): void {
    this.dispatcher.dispatch(new ViewChangedPayload({
      view: View.Search
    }));
  }
}
