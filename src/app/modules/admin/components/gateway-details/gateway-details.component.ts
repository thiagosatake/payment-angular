import { Component, Input, OnInit } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {

  @Input()
  public uuid : String | undefined; 
  gateway !: Gateway;


  constructor(public gatewayService : GatewayService) { }

  ngOnInit(): void {
    console.log( this.uuid );
    this.gatewayService.getOne(this.uuid!).subscribe(
      data => { this.gateway = data }
    );
  }

}
