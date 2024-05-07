import instagramCss from './instagram.str.css';
import twitterCss from './twitter.str.css';
import githubCss from './github.str.css';

export type SiteId =
	| 'facebook'
	| 'twitter'
	| 'reddit'
	| 'hackernews'
	| 'linkedin'
	| 'youtube'
	| 'instagram'
	| 'github';

export const Sites: Record<SiteId, Site> = {
	facebook: {
		label: 'Facebook',
		domain: 'facebook.com',
		paths: [
			'/',
			'/home.php',
			'/watch/',
			'/marketplace/',
			'/groups/feed/',
			'/gaming/feed/',
			'/gaming/play/',
		],
		prefixes: [
			'/reel/'
		],
		origins: [
			'http://www.facebook.com/*',
			'https://www.facebook.com/*',
			'http://web.facebook.com/*',
			'https://web.facebook.com/*',
		],
	},
	instagram: {
		label: 'Instagram',
		domain: 'instagram.com',
		paths: ['/'],
		prefixes: [],
		origins: ['http://www.instagram.com/*', 'https://www.instagram.com/*'],
		css: instagramCss,
	},
	twitter: {
		label: 'Twitter/X',
		domain: 'twitter.com',
		paths: ['/home', '/compose/tweet'],
		prefixes: [],
		origins: [
			'http://twitter.com/*',
			'https://twitter.com/*',
			'http://x.com/*',
			'https://x.com/*',
		],
		css: twitterCss,
	},
	youtube: {
		label: 'YouTube',
		domain: 'youtube.com',
		paths: ['/', '/feed/trending'],
		prefixes: [],
		origins: ['https://www.youtube.com/*'],
	},
	linkedin: {
		label: 'LinkedIn',
		domain: 'linkedin.com',
		paths: ['/', '/feed/'],
		prefixes: [],
		origins: ['http://www.linkedin.com/*', 'https://www.linkedin.com/*'],
	},
	reddit: {
		label: 'Reddit',
		domain: 'reddit.com',
		paths: ['/', '/r/all/', '/r/popular/']
			.map((i) => [
				i + '',
				i + 'home/',
				i + 'hot/',
				i + 'new/',
				i + 'top/',
				i + 'rising/',
			])
			.reduce((i, j) => i.concat(j)),
		prefixes: [],
		origins: [
			'https://www.reddit.com/*',
			'http://www.reddit.com/*',
			'https://old.reddit.com/*',
			'http://old.reddit.com/*',
		],
	},
	hackernews: {
		label: 'Y Combinator News (HN)',
		domain: 'news.ycombinator.com',
		paths: ['/', '/news'],
		prefixes: [],
		origins: ['https://news.ycombinator.com/*'],
	},
	github: {
		label: 'Github',
		domain: 'github.com',
		paths: ['/', '/dashboard'],
		prefixes: [],
		origins: ['https://github.com/*'],
		css: githubCss,
	},
};

export type Site = {
	// Label displayed in the options UI
	label: string;

	// Note: these must also be added to optional_permissions in manifest.json
	origins: string[];

	// Will be enabled for any hostnames containing this value
	domain: string;

	// Will only be enabled for these paths
	paths: string[];

	// Will only be enabled for these prefixes
	prefixes: string[];

	css?: string;
};