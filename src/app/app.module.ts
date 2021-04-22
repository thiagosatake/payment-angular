import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { PaymentModule } from './modules/payment/payment.module';
import { PurchaseModule } from './modules/purchase/purchase.module';

import { HomeComponent } from './modules/home/home.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PurchaseComponent,
    HomeComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PaymentModule,
    PurchaseModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeKeycloak(keycloak: KeycloakService): any {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'my-app',
        clientId: 'pay-angular',
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      loadUserProfileAtStartUp: true,
      bearerExcludedUrls: ['/assets']
    });
}

