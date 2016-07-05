import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, ENV_PROVIDERS } from './app';
import { DIRECTIVES, PIPES, PROVIDERS } from './lib';
require('./server/node-server');

if (ENV_PROVIDERS.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ...PROVIDERS,
  ...ENV_PROVIDERS,
  ...DIRECTIVES,
  ...PIPES
])
.catch(err => console.error(err));
