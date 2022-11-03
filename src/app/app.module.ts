import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEsMx from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';
registerLocaleData(localeEsMx, 'es-MX');

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialCommonModule } from './common/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    LayoutModule,
    MaterialCommonModule,
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'MXN',
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
