import { Component, OnInit } from '@angular/core';
import { Set } from '../model';
import { SetStore } from '../stores';
import { DispatcherService } from '../services';
import { CardSetChangePayload } from '../payloads';

@Component({
  selector: 'rune-search',
  template: `
    <label>
      Set
      <select #set (change)="onSetChanged(set.value)">
        <option selected value="">Any Set</option>
        <option *ngFor="let set of sets" [value]="set.code">{{ set.name }}</option>
      </select>
    </label>`
})
export class RuneSearchComponent implements OnInit {
  sets: Array<Set>;

  constructor(private dispatcher: DispatcherService, private setStore: SetStore) { }

  ngOnInit(): void {
    this.sets = this.setStore.state;
  }

  onSetChanged(newSet: string): void {
    this.dispatcher.dispatch(new CardSetChangePayload({
      setName: newSet || null
    }));
  }
}
