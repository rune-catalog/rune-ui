import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { LoginPayload } from '../payloads';
import { User } from '../model';
import { DispatcherService, UserService } from '../services';

@Injectable()
export class CurrentUserStore extends FluxStore<User | null, LoginPayload> {

  constructor(dispatcher: DispatcherService, private userService: UserService) {
    super(dispatcher);
  }

  protected getInitialState(): User | null {
    return this.userService.currentUser();
  }

  protected reduce(state: User | null, payload: LoginPayload): Promise<User | null> | User | null {
    if (payload.type === LoginPayload.TYPE) {
      return this.userService.login(payload.email, payload.password);
    }

    return state;
  }
}
