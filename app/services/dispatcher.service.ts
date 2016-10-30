import { Injectable } from '@angular/core';
import { Dispatcher } from 'flux-lite';
import { Payload } from '../stores/payload';

@Injectable()
export class DispatcherService extends Dispatcher<Payload> { }
