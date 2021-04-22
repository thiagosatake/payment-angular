import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './app.authguard';

import { PaymentComponent } from './modules/payment/payment.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'payment/:checkoutId', component: PaymentComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)  },
  { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
