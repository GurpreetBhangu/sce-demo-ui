import { CommonModule }        from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LoginWidgetComponent } from './components/login-widget/login-widget.component';
import { HomeSideMenuComponent } from './components/home-side-menu/home-side-menu.component';

// Okta Guard and Service
import { OktaAuthWrapper } from './auth/auth.wrapper';
import { OktaAuthGuard } from './auth/auth.guard';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports:      [  CommonModule,
    FormsModule,
    HttpModule, OAuthModule.forRoot(),RouterModule ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
	LoginWidgetComponent,
	HomeSideMenuComponent,
	LoginFormComponent
  ],
  exports:      [  HeaderComponent,
				    FooterComponent,
					SideMenuComponent,
					LoginWidgetComponent,
					HomeSideMenuComponent,
                  CommonModule,
    FormsModule,
    HttpModule ],
	providers: [
    OktaAuthGuard,
    OktaAuthWrapper
  ]			  
})
export class SharedModule { }
