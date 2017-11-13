import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { OutageMapComponent } from './components/outage-map/outage-map.component';

import { OutageRoutingModule } from './outage-routing.module';


@NgModule({
  declarations: [
	OutageMapComponent
  ],
  imports: [ SharedModule, OutageRoutingModule ],
  providers:    [ ]
})
export class OutageModule { 

}
