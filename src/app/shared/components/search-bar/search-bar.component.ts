import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({

	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
	standalone: false

}) export class SearchBarComponent	implements OnInit{

	@Output() search = new EventEmitter<string>();

	public constructor() {}

	public ngOnInit() {}

	public onSearch(event: any): void{

		const q:string = event.target.value;

		this.search.emit(q);

	}

}
