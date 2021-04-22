import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CheckoutRoutingModule } from './checkout-routing.module';

import { SetupComponent } from './pages/setup/setup.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { PrepareCheckoutComponent } from './components/prepare-checkout/prepare-checkout.component';


@NgModule({
  declarations: [
    SetupComponent,
    HomeComponent,
    CheckoutComponent,
    LinkCardComponent,
    PrepareCheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatTabsModule,
    MatSidenavModule
  ]
})
export class CheckoutModule { }
