import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Gateway } from '../../models/gateway.model';


@Component({
  selector: 'app-prepare-checkout',
  templateUrl: './prepare-checkout.component.html',
  styleUrls: ['./prepare-checkout.component.css']
})
export class PrepareCheckoutComponent implements OnInit {

  selected = '';
  loadedGateway: Gateway[] | undefined;
  selectedGateway: Gateway = { name: '', description: '', uuid: '' };

  constructor(public checkoutService: CheckoutService) { }

  ngOnInit(): void {

    this.checkoutService.getGateway().subscribe(data => {
      if (data !== null) {
        this.loadedGateway = data;
        this.selectedGateway = data[0];
        this.selected = data[0].uuid;
      }
    });

  }

  changeGateway(): void {

    this.checkoutService.getGatewayById(this.selected).subscribe(data => {
      this.selectedGateway = data;
    });

  }

}
