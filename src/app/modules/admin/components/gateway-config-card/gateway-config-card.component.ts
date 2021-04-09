import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-gateway-config-card',
  templateUrl: './gateway-config-card.component.html',
  styleUrls: ['./gateway-config-card.component.css']
})
export class GatewayConfigCardComponent implements OnInit {

  constructor(public gatewayService : GatewayService) { }

  ngOnInit(): void {
  }

  save(){
  }

  delete(){
  }

  update(){
  }

}
