import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Collection } from '../stores/collection.store';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CollectionService {

  private collectionUrl: string = 'http://localhost:3001/collection/sam';

  constructor(private http: Http) { }

  getCollections(): Promise<Array<Collection>> {
    return this.http.get(this.collectionUrl)
      .toPromise()
      .then(res => res.json() as Array<Collection>)
      .catch(this.handleError);
  }

  private handleError(err: Error): Promise<Array<Collection>> {
    return Promise.reject<Array<Collection>>(err.message || err);
  }
}
