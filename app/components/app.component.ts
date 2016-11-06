import { Component } from '@angular/core';
import { StoreInitializerService } from '../services';

@Component({
  selector: 'rune-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(storeInit: StoreInitializerService) { }
}
