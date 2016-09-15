import { Component } from '@angular/core';

@Component({
  selector: 'rune-header',
  template: `
  <header>
    <h1>RUNE</h1>
    <span class="expando"></span>
    <a><i class="icon icon-search"></i></a>
    <a><i class="icon icon-add"></i></a>
    <span class="divider"></span>
    <a><i class="icon icon-menu"></i></a>
  </header>`
})
export class HeaderComponent { }
