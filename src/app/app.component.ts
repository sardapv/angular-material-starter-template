import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  $destroy: Subject<any> = new Subject();
  
  constructor(private _broadcatser: BroadcasterService) {
    

    // app component broadasting
    this._broadcatser.broadcast('mykey', 'myvalue');

    /**
     * do this in other page, for e.g I'm doing here only
     * use this service with takeUntil from rxJS and local Subject to prevent memory leaks like shown
     */
    this._broadcatser.listen('mykey').pipe(takeUntil(this.$destroy)).subscribe({
      next: (data) => console.log(data), // your broadcasted value
      
    });
    
  }

  ngOnDestroy() {
    this.$destroy.next(undefined);
    this.$destroy.complete();
  }
}
