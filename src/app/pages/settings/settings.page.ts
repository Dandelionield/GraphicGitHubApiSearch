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

		let value:number = event.target.valueAsNumber || event.target.value;

        if (value < 5) value = 5;
        else if (value > 30) value = 30;

		environment.itemsPerPage = value;
		this.itemsPerPage = environment.itemsPerPage;

	}

}
