import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common'
/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { HomeModule }    from './home/home.module';
import { OutageModule }    from './outage/outage.module';
import { AccountModule }    from './account/account.module';
import { SharedModule }       from './shared/shared.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
  HomeModule,
  OutageModule,
  AccountModule,
  AppRoutingModule,
    BrowserModule,
	FormsModule,
	SharedModule
  ],
  declarations: [ AppComponent ],
  /*providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],*/
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
