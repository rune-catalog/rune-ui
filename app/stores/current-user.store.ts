import { FluxStore, Action } from 'flux-lite';
import { AbstractPayload } from '../payloads';
import { User } from '../model';
import { DispatcherService, UserService } from '../services';

export class CurrentUserStore extends FluxStore<User | null> {

  constructor(dispatcher: DispatcherService, private userService: UserService) {
    super(dispatcher);
  }

  getInitialState(): User {
    return this.userService.currentUser();
  }

  reduce(state: User | null, action: Action<AbstractPayload>): Promise<User | null> {
    return Promise.resolve(state);
  }
}
