import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  get cardUrl(): string {
    return AppConfig.cardService;
  }

  get collectionUrl(): string {
    return AppConfig.collectionService;
  }

  get userUrl(): string {
    return AppConfig.userService;
  }
}
