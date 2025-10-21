import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { HomePage } from './app/home/home.page';
import { appRouterProviders } from './app/app.routes';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

bootstrapApplication(HomePage, {
  providers: [
    provideIonicAngular(),
    provideHttpClient(),
    ...appRouterProviders,
  ],
}).catch(err => console.error(err));
