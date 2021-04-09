import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayLinkComponent } from './components/pay-link/pay-link.component';
import { GatewayConfigComponent } from './components/gateway-config/gateway-config.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { PayLinkCardComponent } from './components/pay-link-card/pay-link-card.component';
import { GatewayCardComponent } from './components/gateway-card/gateway-card.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { GatewayConfigCardComponent } from './components/gateway-config-card/gateway-config-card.component';
import { GatewaySearchCardComponent } from './components/gateway-search-card/gateway-search-card.component';
import { DialogDeleteConfirmationComponent } from '../../shared/components/dialog-delete-confirmation/dialog-delete-confirmation.component';

@NgModule({
  declarations: [PayLinkComponent, GatewayConfigComponent, PayLinkCardComponent, GatewayCardComponent, GatewayComponent, GatewayConfigCardComponent, GatewaySearchCardComponent, DialogDeleteConfirmationComponent],
  exports: [PayLinkComponent, GatewayConfigComponent, GatewayComponent, GatewaySearchCardComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class AdminModule { }
