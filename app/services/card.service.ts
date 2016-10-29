import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../model/card';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {

  private setUrl = 'http://localhost:3000/card';

  constructor(private http: Http) { }

  getCard(name: string): Promise<Card> {
    return this.http.get(this.setUrl + `/${name}`)
      .toPromise()
      .then(res => res.json() as Card)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<Card> {
    return Promise.reject<Card>(err.message || err);
  }
}
