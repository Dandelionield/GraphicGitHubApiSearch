import {IGitHubProfile} from './../interface/entity/IGitHubProfile';
import {IGitHubRepository} from './../interface/entity/IGitHubRepository';

export class GitHubProfile<T extends IGitHubRepository> implements IGitHubProfile<T>{

	public constructor(private rawData: {

        login: string;
        avatar_url: string;
        html_url: string;
        repos: T[];

    }){}

	public getName(): string{

		return this.rawData.login;

	}

	public getAvatar(): string{

		return this.rawData.avatar_url;

	}

	public getURL(): string{

		return this.rawData.html_url;

	}

	public getRepos(): Array<T>{

		return this.rawData.repos;

	}

	public setName(userName: string): void{

		this.rawData.login = userName;

	}

	public setAvatar(avatar: string): void{

		this.rawData.avatar_url = avatar;

	}

	public setURL(url: string): void{

		this.rawData.html_url = url;

	}

	public setRepos(repos: Array<T>): void{

		this.rawData.repos = repos;

	}

}