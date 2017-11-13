import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { OktaAuthGuard } from './../shared/auth/auth.guard';
import { BillingComponent }    from './components/billing/billing.component';
import { MultiaccountComponent } from './components/billing/multiaccount/multiaccount.component';

@NgModule({
  imports: [RouterModule.forChild([
	{ path: 'account', redirectTo: 'account/billing', pathMatch: 'full'},
	//{ path: 'account/billing', component: BillingComponent, canActivate: [ OktaAuthGuard ] }
    //{ path: 'account/billing', component: BillingComponent }
    { path: 'account/billing', component: MultiaccountComponent }
  ])],
  exports: [RouterModule]
})
export class AccountRoutingModule {}