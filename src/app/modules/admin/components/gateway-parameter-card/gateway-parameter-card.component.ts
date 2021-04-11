import { Component, Input, OnInit } from '@angular/core';
import { GatewayParameter } from '../../models/gateway-parameter.model';

@Component({
  selector: 'app-gateway-parameter-card',
  templateUrl: './gateway-parameter-card.component.html',
  styleUrls: ['./gateway-parameter-card.component.css']
})
export class GatewayParameterCardComponent implements OnInit {

  @Input()
  public gatewayParameter : GatewayParameter = { name : "", value : "" } ;

  constructor() { }

  ngOnInit(): void {
    console.log( JSON.stringify( this.gatewayParameter ) );
  }

}
