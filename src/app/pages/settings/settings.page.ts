import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Component({

	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
	standalone: false

}) export class SettingsPage implements OnInit {

	itemsPerPage: number = 15;

	constructor(private storage: Storage){

		this.initStorage();

	}

	ngOnInit(){}

	async initStorage(){

		await this.storage.create();
		await this.loadSettings();

	}

	async loadSettings() {

		this.itemsPerPage = await this.storage.get('itemsPerPage') || 10;

	}

	async saveItemsPerPage(){

		await this.storage.set('itemsPerPage', this.itemsPerPage);

	}

}
