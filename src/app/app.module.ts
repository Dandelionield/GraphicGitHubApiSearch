import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage-angular';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

	declarations: [AppComponent],
	imports: [

		BrowserModule,
		IonicModule.forRoot({

			mode: 'md' // ios | md

		}),
		AppRoutingModule,
		HttpClientModule,
		IonicStorageModule.forRoot({

			driverOrder: ['localstorage', 'indexeddb']

		}),
		FormsModule

	],
	providers: [{

		provide: RouteReuseStrategy,
		useClass: IonicRouteStrategy

	}],
	bootstrap: [AppComponent],

})
export class AppModule {}
