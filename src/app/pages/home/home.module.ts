import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';

@NgModule({

	imports: [

		SharedModule,
		FormsModule,
		HomePageRoutingModule

	],
	declarations: [HomePage],

}) export class HomePageModule {}
