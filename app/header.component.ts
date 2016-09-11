import { Component } from '@angular/core';

@Component({
  selector: 'rune-header',
  template: `
  <header>
    <h1>RUNE</h1>
    <div class="controls">
      <a><i class="icon icon-menu"></i></a>
      <span class="divider"></span>
      <a><i class="icon icon-add"></i></a>
      <a><i class="icon icon-search"></i></a>
    </div>
  </header>`
})
export class HeaderComponent { }
