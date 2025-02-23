import {IGitHubRepository} from './../interface/entity/IGitHubRepository';

export class GitHubRepository implements IGitHubRepository{

	public constructor(private rawData: {

		name: string;
		description: string;
		html_url: string;

    }){}

	public getName(): string{

		return this.rawData.name;

	}

	public getDescription(): string{

		return this.rawData.description;

	}

	public getURL(): string{

		return this.rawData.html_url;

	}

	public setName(repoName: string): void{

		this.rawData.name = repoName;

	}

	public setDescription(description: string): void{

		this.rawData.description = description;

	}

	public setURL(url: string): void{

		this.rawData.html_url = url;

	}

}