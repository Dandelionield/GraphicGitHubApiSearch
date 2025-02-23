import {Component, OnInit, Input} from '@angular/core';
import {GitHubProfile} from '@entities/GitHubProfile';
import {GitHubRepository} from '@entities/GitHubRepository';
import {Router} from '@angular/router';

@Component({

	selector: 'app-profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.scss'],
	standalone: false

}) export class ProfileCardComponent implements OnInit{

	@Input() profile!: GitHubProfile<GitHubRepository>;

	public constructor(private router: Router){}

	public ngOnInit() {}

	goToProfile(username: string){

		console.log('Navegando a perfil:', username);
		this.router.navigate(['/profile-detail', username]);

	}

}
