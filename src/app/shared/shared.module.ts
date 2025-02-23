import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {RepoListComponent} from './components/repo-list/repo-list.component';

@NgModule({

	declarations: [

		SearchBarComponent,
		ProfileCardComponent,
		RepoListComponent,

	],
	imports: [

		HttpClientModule,
		CommonModule,
		IonicModule,
		RouterModule

	],
	exports: [

		ProfileCardComponent,
		RepoListComponent,
		SearchBarComponent,
		CommonModule,
		IonicModule

	]

}) export class SharedModule{}
