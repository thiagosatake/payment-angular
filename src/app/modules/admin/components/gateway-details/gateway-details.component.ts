import { Component, Input, OnInit } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { GatewayService } from '../../services/gateway.service';
import { GatewayParameterCardComponent } from '../gateway-parameter-card/gateway-parameter-card.component';


@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {

  @Input()
  public uuid : String | undefined; 
  gateway : Gateway = { uuid : "---", name : "", description : "" } ;


  constructor(public gatewayService : GatewayService) { }

  ngOnInit(): void {
    console.log( this.uuid );
    this.gatewayService.getOne(this.uuid!).subscribe(
      data => { this.gateway = data }
    );
  }

}
