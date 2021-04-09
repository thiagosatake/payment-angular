import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentStatusComponent } from './payment-status/payment-status.component';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PaymentStatusComponent],
  exports: [PaymentStatusComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class PaymentModule { }
