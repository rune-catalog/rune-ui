import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UrlService } from './url.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardSetService {

  constructor(private urlService: UrlService, private http: Http) { }

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
    return `${this.urlService.cardUrl}/set/${setCode}`;
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
