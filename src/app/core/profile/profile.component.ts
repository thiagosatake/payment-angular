import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(protected keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.keycloakService.logout();
  }

}
