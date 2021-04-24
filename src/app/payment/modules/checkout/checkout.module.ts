import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class CheckoutModule { }
