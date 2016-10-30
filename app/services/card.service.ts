import { Provider } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../model/card';

import 'rxjs/add/operator/toPromise';

export class CardService {

  constructor(private urlRoot: string, private http: Http) { }

  getCard(name: string): Promise<Card> {
    return this.http.get(this.buildUrl(`/${name}`))
      .toPromise()
      .then(res => res.json() as Card)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<Card> {
    return Promise.reject<Card>(err.message || err);
  }

  private buildUrl(path: string = ''): string {
    return `${this.urlRoot}/card${path}`;
  }
}

export function provideCardService(urlRoot: string): Provider {
  return {
    provide: CardService,
    useFactory: (urlRoot: string, http: Http) => new CardService(urlRoot, http),
    deps: [ Http ]
  }
}
