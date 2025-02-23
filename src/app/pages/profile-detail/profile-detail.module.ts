import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ProfileDetailPageRoutingModule} from './profile-detail-routing.module';
import {ProfileDetailPage} from './profile-detail.page';

@NgModule({

	imports: [

		SharedModule,
		ProfileDetailPageRoutingModule

	],
	declarations: [ProfileDetailPage]

}) export class ProfileDetailPageModule {}
