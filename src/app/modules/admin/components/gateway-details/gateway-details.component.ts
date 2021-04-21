import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { Gateway } from '../../models/gateway.model';
import { GatewayParameter } from '../../models/gateway-parameter.model';
import { GatewayService } from '../../services/gateway.service';
import { GatewayParameterCardComponent } from '../gateway-parameter-card/gateway-parameter-card.component';
import { Router } from '@angular/router';


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


  constructor(public gatewayService: GatewayService, private CFR: ComponentFactoryResolver, private router: Router) { }

  ngOnInit(): void {
    this.loadGatewayParameterCards();
  }

  loadGatewayParameterCards(): void {
    this.gatewayService.getDetails(this.uuid).subscribe(
      i => {
        this.gateway = i;
        this.VCR.clear();
        this.componentsReferences = new Array<ComponentRef<GatewayParameterCardComponent>>();
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
    const newGatewayParameter: GatewayParameter = { uuid: '---', key: '', value: '' };
    this.createComponent(newGatewayParameter);
  }

  createComponent(gatewayParameter: GatewayParameter): void {
    const componentFactory = this.CFR.resolveComponentFactory(GatewayParameterCardComponent);
    const childComponentRef = this.VCR.createComponent(componentFactory);

    const childComponent = childComponentRef.instance;

    childComponent.parentRef = this;

    childComponent.gatewayParameter.uuid = gatewayParameter.uuid;
    childComponent.gatewayParameter.key = gatewayParameter.key;
    childComponent.gatewayParameter.value = gatewayParameter.value;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  remove(gatewayParameter: GatewayParameter): void {
    if (this.VCR.length < 1) { return; }

    const componentRef = this.componentsReferences.filter(
      x => x.instance.gatewayParameter.uuid === gatewayParameter.uuid
    )[0];

    const vcrIndex: number = this.componentsReferences.indexOf(componentRef as any);

    // removing component from container
    this.VCR.remove(vcrIndex);

     // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.gatewayParameter.uuid !== gatewayParameter.uuid
    );

  }

  goAdminSetup(): void {
    this.router.navigateByUrl('/admin/setup');
  }

}
