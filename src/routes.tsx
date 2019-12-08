const Routes = {
	pages: {
		home: `/`,
		browse: `/browse`,
		search: `/search`,
		about: `/about`,
		upload: `/upload`,
		users: `/users`,
		login: `/login`,
		library: `/favorites`,
	},
	album: {
		show: `/album/:hash`,
		detailPage: (hash: string) => `/album/${hash}`,
	},
	artist: {
		show: `/artist/:hash`,
		detailPage: (hash: string) => `/artist/${hash}`,
	},
	track: {
		show: `/track/:hash`,
		detailPage: (hash: string) => `/track/${hash}`,
	},
	genre: {
		show: `/genre/:hash`,
		detailPage: (hash: string) => `/genre/${hash}`,
	},
	podcast: {
		show: `/podcast/:hash`,
		detailPage: (hash: string) => `/podcast/${hash}`,
		goToAuthorDetail: (authorID: string) => `/author/${authorID}`
	},
	user: {
		detailPage: (userHash: string) => `/user/${userHash}`,
		account: `/account`,
		library: {
			tracks: `/your-tracks`,
			albums: `/your-albums`,
			artists: `/your-artists`,
			podcasts: `/your-podcasts`,
			playlists: `/your-playlists`,
			shows: `/your-shows`,
			queue: `/your-queue`,
		},
		manage: {
			home: `/manage`,
			tracks: `/manage-tracks`,
			albums: `/manage-albums`,
			artists: `/manage-artists`,
			podcasts: `/manage-podcasts`,
			playlists: `/manage-playlists`,
			shows: `/manage-shows`,
		},
		create: {
			track: `/add-track`,
			album: `/create-album`,
			artist: `/add-artist`,
			podcast: `/add-podcast`,
			playlist: `/create-playlist`,
			shows: `/add-show`,
		},
	},
	browse: {
		detailPage: (userHash: string) => `/user/${userHash}`,
		users: `/users`,
		tracks: `/browse-tracks`,
		albums: `/browse-albums`,
		artists: `/browse-artists`,
		podcasts: `/browse-podcasts`,
		playlists: `/browse-playlists`,
		shows: `/browse-shows`,
	},
	auth: {
		facebook: `/login-facebook`
	},
	links: {
		jgbSolutions: 'https://jgb.solutions'
	}
};

export default Routes;
