import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { AuthGuard } from './app.authguard';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'checkout/:jwt', component: CheckoutComponent },
  { path: 'payment/:checkoutId', component: PaymentComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
