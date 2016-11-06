import { Injectable } from '@angular/core';

export type AuthToken = string;

const AUTH_TOKEN_KEY: string = 'authToken';

@Injectable()
export class AuthTokenService {
  get(): AuthToken {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  set(token: AuthToken): void {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
}
