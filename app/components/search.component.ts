import { Component, OnInit } from '@angular/core';
import { Set } from '../model';
import { SetStore } from '../stores';

@Component({
  selector: 'rune-search',
  template: `
    <label>
      Set
      <select>
        <option *ngFor="let set of sets" [value]="set.code">{{ set.name }}</option>
      </select>
    </label>`
})
export class RuneSearchComponent implements OnInit {
  sets: Array<Set>;

  constructor(private setStore: SetStore) { }

  ngOnInit(): void {
    this.sets = this.setStore.state;
  }
}
