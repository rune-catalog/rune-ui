import { Component } from '@angular/core';

@Component({
  selector: 'rune-header',
  template: `
    <h1>RUNE</h1>
    <a><i class="icon icon-search"></i></a>
    <a><i class="icon icon-add"></i></a>
    <span class="divider"></span>
    <a><i class="icon icon-menu"></i></a>`
})
export class HeaderComponent { }
