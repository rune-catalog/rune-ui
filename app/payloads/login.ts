import { AbstractPayload } from './payload';

export class LoginPayload extends AbstractPayload {
  static get TYPE(): string {
    return LoginPayload.name;
  }

  constructor(initializer: LoginPayloadInitializer) {
    super();
    this._type = this.constructor.name;
    this.email = initializer.email;
    this.password = initializer.password;
  }

  email: string;

  password: string;
}

export interface LoginPayloadInitializer {
  email: string;
  password: string;
}
