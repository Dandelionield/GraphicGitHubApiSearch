import {IGitHubRepository} from './IGitHubRepository';

export interface IGitHubProfile<T extends IGitHubRepository>{

	getName(): string;

	getAvatar(): string;

	getURL(): string;

	getRepos(): Array<T>;

}