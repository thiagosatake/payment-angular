import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent implements OnInit {
  
  @Input() checkoutId ! : string;
  @Input() description ! : string;
  @Input() amount ! : string;
  @Input() currency ! : string;
  @Input() paymentType ! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
