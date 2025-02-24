import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
//import {HomePage} from './pages/home/home.page';

const routes: Routes = [

	{path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
	{path: 'profile-detail/:username', loadChildren: () => import('./pages/profile-detail/profile-detail.module').then(m => m.ProfileDetailPageModule)},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'about', loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)},
	{path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)},
	//{path: 'home', component: HomePage}

]

@NgModule({

	imports: [

		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})

	],
	exports: [RouterModule]

}) export class AppRoutingModule {}