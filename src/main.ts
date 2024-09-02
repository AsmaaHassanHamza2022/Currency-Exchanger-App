import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/ApplicationModule/app.config';
import { AppComponent } from './app/ApplicationModule/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
