import { Provider } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class CardSetService {

  constructor(private urlRoot: string, private http: Http) { }

  getSet(setCode: string): Promise<MtgSet> {
    return this.http.get(this.buildUrl(setCode))
      .toPromise()
      .then(res => res.json() as MtgSet)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<MtgSet> {
    return Promise.reject<MtgSet>(err.message || err);
  }

  private buildUrl(setCode: String): string {
    return `${this.urlRoot}/set/${setCode}`;
  }
}

class MtgSet {
  name: string;
  cards: Array<ApiCard>;
}

class ApiCard {
  name: string;
  colors: string;
}

export function provideCardSetService(urlRoot: string): Provider {
  return {
    provide: CardSetService,
    useFactory: (urlRoot: string, http: Http) => new CardSetService(urlRoot, http),
    deps: [ Http ]
  };
}
