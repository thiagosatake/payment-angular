import { Component, OnInit, Input } from '@angular/core';
import { PaymentStatusService } from "./payment-status.service";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  @Input() checkoutId ! : string;
  paymentStatus ! : string;

  constructor(public paymentStatusService: PaymentStatusService) { }

  ngOnInit(): void {
    this.paymentStatusService.getPaymentStatus(this.checkoutId).subscribe(
      data => this.paymentStatus = data.status
    );
  }

}
