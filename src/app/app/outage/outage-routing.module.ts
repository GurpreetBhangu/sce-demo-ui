import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { OutageMapComponent }    from './components/outage-map/outage-map.component';

@NgModule({
  imports: [RouterModule.forChild([
	{ path: 'outage', redirectTo: 'outage/outage-map', pathMatch: 'full'},
	{ path: 'outage/outage-map', component: OutageMapComponent }
  ])],
  exports: [RouterModule]
})
export class OutageRoutingModule {}