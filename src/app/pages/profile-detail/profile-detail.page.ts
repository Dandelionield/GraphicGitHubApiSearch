import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '@services/http.service';
import {environment} from '@environments/environment';
import {SharedModule} from '@shared/shared.module';
import {GitHubProfile} from '@entities/GitHubProfile';
import {GitHubRepository} from '@entities/GitHubRepository';

@Component({

	selector: 'app-profile-detail',
	templateUrl: './profile-detail.page.html',
	styleUrls: ['./profile-detail.page.scss'],
	standalone: false

}) export class ProfileDetailPage implements OnInit{

	profile!: GitHubProfile<GitHubRepository>;
	repos: Array<GitHubRepository> = [];

	constructor(

		private route: ActivatedRoute,
		private http: HttpService

	){}

	ngOnInit(){

		this.route.paramMap.subscribe(params => {

			const profilename = params.get('username') || '';
			this.loadprofile(profilename!);
			this.loadRepos(profilename!);

		});

		/*const profilename = this.route.snapshot.paramMap.get('username');
		this.loadprofile(profilename!);
		this.loadRepos(profilename!);/**/

	}

	private loadprofile(profilename: string){

		console.log("profile");
        this.http.get<GitHubProfile<GitHubRepository>>(

            environment.githubApi.endpoints.profile.replace(':username', profilename)

        ).subscribe(profile => this.profile = profile);

    }

    private loadRepos(profilename: string){

		console.log("repos");
        this.http.get<Array<GitHubRepository>>(

            environment.githubApi.endpoints.repos.replace(':username', profilename)

        ).subscribe(repos => this.repos = repos);

    }

}
