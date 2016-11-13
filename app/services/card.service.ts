import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../model/card';
import { UrlService } from './url.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {

  constructor(private urlService: UrlService, private http: Http) { }

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
    return `${this.urlService.cardUrl}/card${path}`;
  }
}
