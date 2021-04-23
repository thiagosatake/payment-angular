import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('drawer') sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.sidenav.toggle();
  }

}
