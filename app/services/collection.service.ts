import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Collection } from '../model';
import { UrlService } from './url.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CollectionService {

  constructor(private urlService: UrlService, private http: Http) { }

  getCollections(): Promise<Array<Collection>> {
    return this.http.get(this.buildUrl())
      .toPromise()
      .then(res => res.json() as Array<Collection>)
      .catch(this.handleError);
  }

  updateCollection(slug: string, card: string, quantity: number): Promise<null> {
    return this.http.patch(this.buildUrl(`/${slug}`), [ {
      name: card,
      quantity
    }])
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<Array<Collection>> {
    return Promise.reject<Array<Collection>>(err.message || err);
  }

  private buildUrl(path: string = ''): string {
    return `${this.urlService.collectionUrl}/collection/sam${path}`;
  }
}
