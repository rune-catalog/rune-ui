import { Injectable } from '@angular/core';
import { Dispatcher } from 'flux-lite';
import { AbstractPayload } from '../payloads';

@Injectable()
export class DispatcherService extends Dispatcher<AbstractPayload> { }
