import { Component, Input, OnInit } from '@angular/core';
import { GatewayParameter } from '../../models/gateway-parameter.model';
import { GatewayService } from '../../services/gateway.service';
import { GatewayDetailsComponent } from '../gateway-details/gateway-details.component';

@Component({
  selector: 'app-gateway-parameter-card',
  templateUrl: './gateway-parameter-card.component.html',
  styleUrls: ['./gateway-parameter-card.component.css']
})
export class GatewayParameterCardComponent implements OnInit {

  @Input()
  public gatewayParameter: GatewayParameter = { key: '', value: ''};
  public parentRef!: GatewayDetailsComponent;

  constructor(public gatewayService: GatewayService) { }

  ngOnInit(): void {
    console.log( JSON.stringify( this.gatewayParameter ) );
  }

}