import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checkout } from './checkout.model';

import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    
  decoded_jwt ! : Checkout;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var checkout_jwt = this.route.snapshot.params.jwt;
    this.decoded_jwt = jwt_decode(checkout_jwt);
  }

}
