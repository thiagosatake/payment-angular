import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Gateway } from '../../models/gateway.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gateway-search-card',
  templateUrl: './gateway-search-card.component.html',
  styleUrls: ['./gateway-search-card.component.css']
})
export class GatewaySearchCardComponent implements OnInit {
  selected = new FormControl();
  gatewayList  !: Gateway[];

  constructor(public gatewayService : GatewayService) { }

  ngOnInit(): void {
    this.gatewayService.get().subscribe(
      data => this.gatewayList = data
    );
  }

}
