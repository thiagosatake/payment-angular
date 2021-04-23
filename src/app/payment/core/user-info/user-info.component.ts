import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UserInfo } from './user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo: UserInfo = {};

  constructor(protected keycloakService: KeycloakService) { }

  ngOnInit(): void {

    this.keycloakService.isLoggedIn().then(result => {
    
      let userProfile = this.keycloakService.getKeycloakInstance().profile;

      this.userInfo = {
        name: userProfile?.username,
        firstName: userProfile?.firstName,
        lastName: userProfile?.lastName,
        email: userProfile?.email       
      }
      
    })
      .catch(reason => console.log(reason));

  }

}
