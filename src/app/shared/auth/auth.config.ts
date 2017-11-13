import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://dev-711684.oktapreview.com',

  // URL of the SPA to redirect the user to after login
  //redirectUri: 'http://localhost:4200/callback',
	redirectUri: 'http://linux-d8-poc.eastus.cloudapp.azure.com/callback',
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '0oackqc8k7N1zD2py0h7',
	//clientId: '0oaci13hlnKe61bTc0h7',
	//clientId: '0oacl7p3oaO3DLHj60h7',
	postLogoutRedirectUri: 'http://linux-d8-poc.eastus.cloudapp.azure.com/angular',
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email'
  
  
}