import {Component, OnInit} from '@angular/core';
//import {Storage} from '@ionic/storage-angular';
import {environment} from '@environments/environment';

@Component({

	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
	standalone: false

}) export class SettingsPage implements OnInit {

	itemsPerPage: number = environment.itemsPerPage;

	constructor(){

		this.initStorage();

	}

	ngOnInit(){}

	async initStorage(){

		await this.loadSettings();

	}

	async loadSettings() {

		this.itemsPerPage = environment.itemsPerPage;

	}

	async saveItemsPerPage(event: any){

		environment.itemsPerPage = event.target.value;
		this.itemsPerPage = environment.itemsPerPage;

	}

}
