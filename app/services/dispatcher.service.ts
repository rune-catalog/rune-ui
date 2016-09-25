import { Injectable } from '@angular/core';
import { Dispatcher } from 'flux-lite';
import { Action } from '../stores/action';

@Injectable()
export class DispatcherService extends Dispatcher<Action> { }
