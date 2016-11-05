import { Injectable, Provider } from '@angular/core';
import { Http } from '@angular/http';
import { Set } from '../model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SetService {

  constructor(private urlRoot: string, private http: Http) { }

  getSets(): Promise<Array<Set>> {
    return this.http.get(this.buildUrl())
      .toPromise()
      .then(res => res.json() as Array<Set>)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<Array<Set>> {
    return Promise.reject<Array<Set>>(err.message || err);
  }

  private buildUrl(): string {
    return `${this.urlRoot}/sets`;
  }
}

export function provideSetService(urlRoot: string): Provider {
  return {
    provide: SetService,
    useFactory: (http: Http) => new SetService(urlRoot, http),
    deps: [ Http ]
  };
}
