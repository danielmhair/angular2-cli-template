import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

require('./server/node-server');

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

