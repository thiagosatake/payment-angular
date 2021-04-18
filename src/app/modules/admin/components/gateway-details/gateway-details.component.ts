import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { GatewayParameter } from '../../models/gateway-parameter.model';
import { GatewayService } from '../../services/gateway.service';
import { GatewayParameterCardComponent } from '../gateway-parameter-card/gateway-parameter-card.component';


@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {

  @Input()
  public uuid = '';

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR !: ViewContainerRef;

  componentsReferences = Array<ComponentRef<GatewayParameterCardComponent>>();

  gatewayParameters!: GatewayParameter[];

  gateway: Gateway | undefined;


  constructor(public gatewayService: GatewayService, private CFR: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadGatewayParameterCards();
  }

  loadGatewayParameterCards(): void {
    this.gatewayService.getDetails(this.uuid).subscribe(
      i => {
        this.gateway = i;
        console.log( JSON.stringify(i) );
        this.VCR.clear();
        this.createNewGatewayDetailCard();
        if (this.gateway.configurations !== undefined) {
          this.gateway.configurations.forEach(ii => {
            this.createComponent(ii);
          });
        }
      }
    );
  }

  createNewGatewayDetailCard(): void {
    const newGatewayParameter: GatewayParameter = { key: '', value: '' };
    this.createComponent(newGatewayParameter);
  }

  createComponent(gatewayParameter: GatewayParameter): void {
    const componentFactory = this.CFR.resolveComponentFactory(GatewayParameterCardComponent);
    const childComponentRef = this.VCR.createComponent(componentFactory);

    const childComponent = childComponentRef.instance;

    childComponent.parentRef = this;

    childComponent.gatewayParameter.key = gatewayParameter.key;
    childComponent.gatewayParameter.value = gatewayParameter.value;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(gatewayParameter: GatewayParameter): void {
    if (this.VCR.length < 1) { return; }

    const vcrIndex = this.componentsReferences.findIndex(
      x => x.instance.gatewayParameter.key === gatewayParameter.key
    );

    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the reference list
    this.componentsReferences.splice(vcrIndex, 1);
  }

}
