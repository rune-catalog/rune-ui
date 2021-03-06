import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model';
import { AuthTokenService, AuthToken } from './auth-token.service';
import { UrlService } from './url.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
      private urlService: UrlService,
      private http: Http,
      private authTokenService: AuthTokenService) { }

  currentUser(): User | null {
    let token = this.authTokenService.get();
    if (token === null) {
      return null;
    }
    return this.deserializeToken(token);
  }

  login(email: string, password: string): Promise<User> {
    return this.http.post(this.buildUrl(), { email, password })
      .toPromise()
      .then(response => {
        let token = response.text();
        this.authTokenService.set(token);
        return token;
      })
      .catch(this.handleError)
      .then(this.deserializeToken);
  }

  private handleError(err: Error): Promise<User> {
    return Promise.reject<User>(err.message || err);
  }

  private deserializeToken(token: AuthToken): User {
    let [ , body ] = token.split('.');
    return JSON.parse(atob(body));
  }

  private buildUrl(): string {
    return `${this.urlService.userUrl}/login`;
  }
}
