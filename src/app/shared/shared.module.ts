import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage-angular';

import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {RepoListComponent} from './components/repo-list/repo-list.component';
import {BackButtonComponent} from './components/back-button/back-button.component';

@NgModule({

	declarations: [

		SearchBarComponent,
		ProfileCardComponent,
		RepoListComponent,
		BackButtonComponent

	],
	imports: [

		IonicStorageModule,
		HttpClientModule,
		CommonModule,
		IonicModule,
		RouterModule,
		FormsModule

	],
	exports: [

		ProfileCardComponent,
		RepoListComponent,
		SearchBarComponent,
		BackButtonComponent,
		CommonModule,
		IonicModule,
		FormsModule

	]

}) export class SharedModule{}
