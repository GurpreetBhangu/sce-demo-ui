import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public oauthService: OAuthService) { }

	get givenName() {
		const claims = this.oauthService.getIdentityClaims();
		if (!claims) {
		  return null;
		}
		return claims['name'];
	}
	
	logout() {
		this.oauthService.logOut();
	}
	
	ngOnInit() {
	}

}
