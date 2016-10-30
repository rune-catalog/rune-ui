import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardSetService {

  private setUrl = 'http://localhost:3000/set/ody';

  constructor(private http: Http) { }

  getSet(setCode: string): Promise<MtgSet> {
    return this.http.get(this.setUrl)
      .toPromise()
      .then(res => res.json() as MtgSet)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<MtgSet> {
    return Promise.reject<MtgSet>(err.message || err);
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
