import {Component, OnInit, Input} from '@angular/core';
import {GitHubRepository} from '@entities/GitHubRepository';

@Component({

	selector: 'app-repo-list',
	templateUrl: './repo-list.component.html',
	styleUrls: ['./repo-list.component.scss'],
	standalone: false

}) export class RepoListComponent implements OnInit{

	@Input() repos: Array<GitHubRepository> = [];

	public constructor() {}

	public ngOnInit() {}

}
