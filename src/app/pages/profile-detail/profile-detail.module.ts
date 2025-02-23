import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
/*import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';*/

import {ProfileDetailPageRoutingModule} from './profile-detail-routing.module';
import {ProfileDetailPage} from './profile-detail.page';

@NgModule({

	imports: [

		SharedModule

	],
	declarations: [ProfileDetailPage]

}) export class ProfileDetailPageModule {}
