
export const environment = {

	production: false,
	githubApi: {
		baseUrl: 'https://api.github.com',
		endpoints: {

			users: '/users/',
			profile: '/users/:username',
			repos: '/users/:username/repos',
			search: '/search/users',

		},

	},

};
