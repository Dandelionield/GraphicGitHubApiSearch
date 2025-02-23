import {Component, OnInit, Input} from '@angular/core';
import {GitHubProfile} from '@entities/GitHubProfile';
import {GitHubRepository} from '@entities/GitHubRepository';

@Component({

	selector: 'app-profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.scss'],
	standalone: false

}) export class ProfileCardComponent implements OnInit{

	@Input() profile!: GitHubProfile<GitHubRepository>;

	public constructor(){}

	public ngOnInit() {}

}
