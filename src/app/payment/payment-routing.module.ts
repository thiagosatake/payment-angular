import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';


const routes: Routes = [
  { path: '', component: PaymentComponent,
    children: [
      { path: 'payment/admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)  },
      { path: 'payment/checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)  }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
