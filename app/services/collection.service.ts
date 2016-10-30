import { Provider } from '@angular/core';
import { Http } from '@angular/http';
import { Collection } from '../model';

import 'rxjs/add/operator/toPromise';

export class CollectionService {

  constructor(private urlRoot: string, private http: Http) { }

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
    return `${this.urlRoot}/collection/sam${path}`;
  }
}

export function provideCollectionService(urlRoot: string): Provider {
  return {
    provide: CollectionService,
    useFactory: (http: Http) => new CollectionService(urlRoot, http),
    deps: [ Http ]
  };
}
