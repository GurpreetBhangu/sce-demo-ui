import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from './../../auth/auth.wrapper';
import { LoginForm } from './loginForm';

@Component({
  selector: 'login-widget',
  templateUrl: './login-widget.component.html',
  styles: []
})


export class LoginWidgetComponent implements OnInit {
	loginForm = new LoginForm('', '', false);	

	
	constructor(private oauthService: OAuthService,
            private oktaAuthWrapper: OktaAuthWrapper) {
	}
	
	
  
	loginWithPassword(model:LoginForm) {
	  this.oktaAuthWrapper.login(model.userid, model.pwd)
		.then((response) => {
		})
		.catch(err => console.error('error logging in', err));
	}
	
	ngOnInit() {
	}

}
