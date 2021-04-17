import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Gateway } from '../../models/gateway.model';
import { GatewayCardComponent } from '../gateway-card/gateway-card.component';

@Component({
  selector: 'app-gateway-setup',
  templateUrl: './gateway-setup.component.html',
  styleUrls: ['./gateway-setup.component.css']
})
export class GatewaySetupComponent implements OnInit {

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR !: ViewContainerRef;

  componentsReferences = Array<ComponentRef<GatewayCardComponent>>()

  gatewayList  !: Gateway[];

  constructor(public gatewayService: GatewayService, private CFR: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadGatewayCards();
  }

  loadGatewayCards() {
    this.gatewayService.get().subscribe(
      data => {
        this.VCR.clear();
        this.componentsReferences = new Array<ComponentRef<GatewayCardComponent>>();
        this.createNewGatewayCard();
        this.gatewayList = data;
        this.gatewayList.forEach(data => {
          this.createComponent(data);
        });
      }
    );
  }

  createNewGatewayCard() {
    let newGateway: Gateway = { uuid: "---", name: "", description: "" }
    this.createComponent(newGateway);
  }

  createComponent(gateway: Gateway) {

    let componentFactory = this.CFR.resolveComponentFactory(GatewayCardComponent);
    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;

    childComponent.parentRef = this;

    childComponent.gateway.uuid = gateway.uuid;
    childComponent.gateway.name = gateway.name;
    childComponent.gateway.description = gateway.description;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);

  }

  remove(gateway: Gateway) {
    if (this.VCR.length < 1) return;

    let vcrIndex = this.componentsReferences.findIndex(
      x => x.instance.gateway.uuid == gateway.uuid
    );

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the reference list
    this.componentsReferences.splice(vcrIndex, 1);
  }

}
