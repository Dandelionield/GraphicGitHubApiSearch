import {Component, OnInit} from '@angular/core';
import {HttpService} from '@services/http.service';
import {environment} from '@environments/environment';
import {SharedModule} from '@shared/shared.module';
import {GitHubProfile} from '@entities/GitHubProfile';
import {GitHubRepository} from '@entities/GitHubRepository';

@Component({

	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
	standalone: false

}) export class HomePage implements OnInit{

	profiles: Array<GitHubProfile<GitHubRepository>> = [];

	searchQuery:string = '';

	public constructor(private http: HttpService) {}

	public ngOnInit() {}

	onSearch(query: string){

		this.searchQuery = query.trim();
    
		if (this.searchQuery.length===0){

			this.profiles = [];
			return;

		}

		this.http.get(

			environment.githubApi.endpoints.search,{
				
				q: query,
				per_page: 15

			}).subscribe((response: any) => {

				this.profiles = response;

			});

	}

}
