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
  
  toggle() {
    this.sidenav.toggle();
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  goPurchase() {
    this.router.navigateByUrl("/purchase");
  }

  goAdmin() {
    this.router.navigateByUrl("/admin");
  }

  goLogoff() {
    this.keycloakService.logout();
  }

}
