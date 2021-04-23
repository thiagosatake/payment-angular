import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';

import { PaymentComponent } from './payment.component';

import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    PaymentRoutingModule,
    CommonModule,
    CoreModule,
    HomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule
  ]
})
export class PaymentModule { }
