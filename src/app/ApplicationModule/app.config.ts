import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations'

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { addAccesskeyInterceptor } from '../CallerModule/Interceptors/add-accesskey.interceptor';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([addAccesskeyInterceptor])),
    provideAnimations()
  
  ],
};
