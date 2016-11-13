import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Set } from '../model';
import { UrlService } from './url.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SetService {

  constructor(private urlService: UrlService, private http: Http) { }

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
    return `${this.urlService.cardUrl}/sets`;
  }
}
