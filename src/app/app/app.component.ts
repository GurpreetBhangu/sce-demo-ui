import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './shared/auth/auth.config';

@Component({
  selector: 'sce-app',
  template: `
<div id="globalWrapper">
	<div class="row-fluid">	
		<app-header></app-header>
		<router-outlet></router-outlet>
	</div>
</div>	
<app-footer></app-footer>`
})
export class AppComponent {
  subtitle = '(Final)';
  constructor(private oauthService: OAuthService) {
      this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}
