import { Component, OnInit, Input } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentLink } from '../../models/payment-link.model';
import { PrepareCheckoutComponent } from '../prepare-checkout/prepare-checkout.component';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css']
})
export class LinkCardComponent implements OnInit {

  formGroup = new FormGroup({
    order: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    paymentType: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  @Input()
  gateway: Gateway = { uuid: '---', name: '', description: '' };

  paymentLink: PaymentLink = { uuid: '---', order: '', currency: '', paymentType: '', amount: 0.00,  description: '' };
  saveMode = false;

  public parentRef!: PrepareCheckoutComponent;

  constructor() { }

  ngOnInit(): void {
    console.log( 'Gateway UUID -> ' + this.gateway.uuid );
    console.log( 'Buscar Currency e Payment Type' );
  }

  refresh(): void {
  }

  save(): void {
  }

  enable(): void {
  }

  delete(): void {
  }

}
