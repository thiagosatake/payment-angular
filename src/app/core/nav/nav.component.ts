import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('drawer') sidenav!: MatSidenav;

  constructor(protected keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.sidenav.toggle();
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  goPurchase(): void {
    this.router.navigateByUrl('/purchase');
  }

  goAdminDashboard(): void {
    this.router.navigateByUrl('/admin/dashboard');
  }

  goAdminSetup(): void {
    this.router.navigateByUrl('/admin/setup');
  }

  goCheckoutSetup(): void {
    this.router.navigateByUrl('/checkout/setup');
  }

  goLogoff(): void {
    this.keycloakService.logout();
  }

}
