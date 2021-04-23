import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pay-link-card',
  templateUrl: './pay-link-card.component.html',
  styleUrls: ['./pay-link-card.component.css']
})
export class PayLinkCardComponent implements OnInit {
  collapsed: boolean = true;
  paymentLinkForm: any;
  link: string = "http://localhost:9001/";

  constructor(private formBuilder: FormBuilder) {
    this.paymentLinkForm = this.formBuilder.group({
      amount: ['', Validators.required],
      currency: ['', Validators.required],
      paymentType: ['', Validators.required],
      order: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
