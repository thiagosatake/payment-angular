import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './app.authguard';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '**', redirectTo: 'payment' },
  { path: 'payment',  component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
