import { Component } from '@angular/core';
import { DispatcherService } from '../services';
import { LoginPayload } from '../payloads';

@Component({
  selector: 'rune-login',
  template: `
    <input #email type="text" (keyup)="onKeyUp($event)">
    <input #password type="password" (keyup)="onKeyUp($event)">
    <button (click)="submit(email.value, password.value) "type="button">Log In</button>
    `
})
export class RuneLoginComponent {

  constructor(private dispatcher: DispatcherService) { }

  onKeyUp(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      console.log('enter');
    } else {
      console.log('not enter');
    }
  }

  submit(email: string, password: string): void {
    this.dispatcher.dispatch(new LoginPayload({
      email,
      password
    }));
  }
}
