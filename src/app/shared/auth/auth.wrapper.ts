import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';

//declare const OktaAuth: any;

@Injectable()
export class OktaAuthWrapper {

  private authClient: any;

  constructor(private oauthService: OAuthService ) {
    this.authClient = new OktaAuth({
      url: this.oauthService.issuer
    });
  }

  login(username: string, password: string): Promise<any> {
    return this.oauthService.createAndSaveNonce().then(nonce => {
      return this.authClient.signIn({
        username: username,
        password: password
      }).then((response) => {
        if (response.status === 'SUCCESS') {
//			
          return this.authClient.token.getWithoutPrompt({
            clientId: this.oauthService.clientId,
            responseType: ['id_token', 'token'],
            scopes: ['openid', 'profile', 'email'],
            sessionToken: response.sessionToken,
            nonce: nonce,
            redirectUri: this.oauthService.redirectUri
          })
            .then((tokens) => {
				//console.log(tokens);
              const idToken = tokens[0].idToken;
              const accessToken = tokens[1].accessToken;
             const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
              return this.oauthService.tryLogin({
                customHashFragment: keyValuePair,
                disableOAuth2StateCheck: true
              });
            });
        } else {
          return Promise.reject('We cannot handle the ' + response.status + ' status');
        }
      });
    });
  }
}