import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  //show this warning only on prod mode
  if (window) {
    selfXSSWarning();
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

function selfXSSWarning() {
  setTimeout(() => {
    console.log('%c!!! STOP !!!', 'font-weight:bold; font: 6em Arial; color: red; ');
    console.log(
      `\n%cThis is a browser feature intended for developers. Using this console may allow\
     attackers to impersonate you and steal your information using an attack called Self-XSS.\
     Do not enter or paste code that you do not understand.`,
      'font-weight:bold; font: 3em Arial; color: red;'
    );
  });
}
