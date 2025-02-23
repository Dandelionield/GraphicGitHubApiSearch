import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {GitHubProfile} from '@entities/GitHubProfile';
import {GitHubRepository} from '@entities/GitHubRepository';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({

	providedIn: 'root'

}) export class HttpService{

	private apiUrl = environment.githubApi.baseUrl;

	constructor(private http: HttpClient) {}

	public get<T>(endpoint: string, params?: any): Observable<T>{

        return this.http.get(`${this.apiUrl}${endpoint}`, {params}).pipe(

            map((response: any) => {return this.mapResponse<T>(endpoint, response)})

        );

    }

    private mapResponse<T>(endpoint: string, data: any): T{

		console.log(data);

        if (endpoint.includes('/users') && !endpoint.includes('/repos')){

			//console.log(data.items);

			let p: any = [];

			data.items.forEach((profile:any) => {

				p.push(new GitHubProfile({

					login: profile.login,
					avatar_url: profile.avatar_url,
					html_url: profile.html_url,
					repos: data.repos ? data.repos.map((repo: any) => new GitHubRepository({

						name: repo.name,
						description: repo.description,
						html_url: repo.html_url

					})) : []

				}) as unknown as T);

			});/**/

			console.log(p);

			return p;

        }
        
        if (endpoint.includes('/repos')){

			let p: any = [];

			console.log(data);

			data.forEach((repo:any) =>{

				p.push(new GitHubRepository({

					name: repo.name,
					description: repo.description,
					html_url: repo.html_url

				}))as unknown as T;

			});

			console.log(p);

            return p;

        }

        return data;
    }

}
