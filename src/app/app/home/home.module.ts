import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
	HomeComponent,
	CarouselComponent
  ],
  imports: [ SharedModule, HomeRoutingModule ],
  providers:    [ ]
})
export class HomeModule { 

}
