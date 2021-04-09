import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SibsCardComponent } from './sibs-card/sibs-card.component';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SibsCardComponent, CheckoutDetailsComponent],
  exports: [SibsCardComponent, CheckoutDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CheckoutModule { }
