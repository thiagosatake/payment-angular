import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PurchaseHistoryComponent],
  exports: [PurchaseHistoryComponent],
  imports: [
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    CommonModule
  ]
})
export class PurchaseModule { }
