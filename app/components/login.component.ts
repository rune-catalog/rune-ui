import { Component } from '@angular/core';
import { DispatcherService } from '../services';
import { LoginPayload } from '../payloads';

@Component({
  selector: 'rune-login',
  template: `
    <input #email type="text" (keyup)="onKeyUp($event, email.value, password.value)" placeholder="email">
    <input #password type="password" (keyup)="onKeyUp($event, email.value, password.value)" placeholder="password">
    <button (click)="submit(email.value, password.value) "type="button">Log In</button>
    `
})
export class RuneLoginComponent {

  constructor(private dispatcher: DispatcherService) { }

  onKeyUp(event: KeyboardEvent, email: string, password: string): void {
    if (event.keyCode === 13) {
      this.submit(email, password);
    }
  }

  submit(email: string, password: string): void {
    this.dispatcher.dispatch(new LoginPayload({
      email,
      password
    }));
  }
}
