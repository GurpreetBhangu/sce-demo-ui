import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { BillingComponent } from './components/billing/billing.component';

import { AccountRoutingModule } from './account-routing.module';
import { MultiaccountComponent } from './components/billing/multiaccount/multiaccount.component';


@NgModule({
  declarations: [
	BillingComponent,
	MultiaccountComponent
  ],
  imports: [ SharedModule, AccountRoutingModule ],
  providers:    [ ]
})
export class AccountModule { 

}
