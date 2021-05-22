import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

interface BroadCastObject {
  key: any;
  value: any;
}

@Injectable({ providedIn: 'root' })

/* just single subject to emit across application key-value pair */
export class BroadcasterService {
  private _eventQueue: Subject<BroadCastObject>;

  constructor() {
    this._eventQueue = new Subject<BroadCastObject>();
  }

  broadcast(key: any, value: any) {
    this._eventQueue.next({ key, value });
  }

  unsubscribe() {
    this._eventQueue.complete();
  }

  listen<T>(key: any): Observable<T> {
    return this._eventQueue.asObservable().pipe(
      filter((e) => e.key === key),
      map((e) => <T>e.value)
    );
  }
}
