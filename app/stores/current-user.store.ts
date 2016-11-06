import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { LoginPayload } from '../payloads';
import { User } from '../model';
import { DispatcherService, UserService } from '../services';

@Injectable()
export class CurrentUserStore extends FluxStore<User | null> {

  constructor(dispatcher: DispatcherService, private userService: UserService) {
    super(dispatcher);
  }

  getInitialState(): User | null {
    return null;
  }

  reduce(state: User | null, action: Action<LoginPayload>): Promise<User | null> {
    if (action.payload.type === LoginPayload.TYPE) {
      return this.userService.login(action.payload.email, action.payload.password);
    }

    return Promise.resolve(this.userService.currentUser());
  }
}
