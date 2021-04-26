import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Gateway } from '../../models/gateway.model';
import { LinkCardComponent } from '../link-card/link-card.component';


@Component({
  selector: 'app-prepare-checkout',
  templateUrl: './prepare-checkout.component.html',
  styleUrls: ['./prepare-checkout.component.css']
})
export class PrepareCheckoutComponent implements OnInit {

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR !: ViewContainerRef;

  componentsReferences = Array<ComponentRef<LinkCardComponent>>();

  selected = '';
  loadedGateway: Gateway[] | undefined;
  selectedGateway: Gateway = { uuid: '', name: '', description: ''};

  constructor(public checkoutService: CheckoutService, private CFR: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.checkoutService.getGateway().subscribe(data => {
      if (data !== null) {
        this.loadedGateway = data;
        this.selectedGateway = data[0];
        this.selected = data[0].uuid;
        this.loadLinkCards();
      }
    });

  }

  changeGateway(): void {
    this.checkoutService.getGatewayById(this.selected).subscribe(data => {
      this.selectedGateway = data;
      this.loadLinkCards();
    });
  }

  loadLinkCards(): void {
    this.createNewLinkCard();
  }

  createNewLinkCard(): void {
    this.createComponent();
  }

  createComponent(): void {
    const componentFactory = this.CFR.resolveComponentFactory(LinkCardComponent);
    const childComponentRef = this.VCR.createComponent(componentFactory);

    const childComponent = childComponentRef.instance;

    childComponent.parentRef = this;

    childComponent.gateway.uuid = this.selectedGateway.uuid;
    childComponent.gateway.name = this.selectedGateway.name;
    childComponent.gateway.description = this.selectedGateway.description;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);

  }

}
