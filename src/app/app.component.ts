import { Component } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _broadcatser: BroadcasterService) {
    // app component broadasting
    this._broadcatser.broadcast('mykey', 'myvalue');

    // do this in other page
    this._broadcatser.listen('mykey').subscribe({
      next: (data) => console.log(data), // your broadcasted value
      // use this service with takeUntil from rxJS and local Subject to prevent memory leaks
    });
  }
}
