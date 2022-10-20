import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from './app/services/config/config';
import { environment } from './environments/environment';

fetch(`assets/config/config.json`)
  .then(res => {
    if (!res.ok) { throw Error(res.statusText); }
    return res.json();
  })
  .then(config => {
    if (environment.production) {
      enableProdMode();
    }
    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }]).bootstrapModule(AppModule)
      .catch(err => console.error(err))
  });