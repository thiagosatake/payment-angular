import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  checkoutId : String = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkoutId = this.route.snapshot.params.checkoutId;
  }

}
