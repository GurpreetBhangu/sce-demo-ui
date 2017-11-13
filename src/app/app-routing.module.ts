import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from './shared/auth/auth.guard';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'outage', loadChildren: 'app/outage/outage.module#OutageModule' },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule', canActivate: [ OktaAuthGuard ] },
  { path: 'login' ,component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
