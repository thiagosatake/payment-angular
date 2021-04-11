import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'setup', component: SetupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
