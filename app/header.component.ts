import { Component } from '@angular/core';

@Component({
  selector: 'rune-header',
  template: `
  <header>
    <h1>RUNE</h1>
    <div class="controls">
      <a><img alt="search"></a>
      <a><img alt="add cards"></a>
      <span class="divider"></span>
      <a><img alt="menu"></a>
    </div>
  </header>`
})
export class HeaderComponent { }
