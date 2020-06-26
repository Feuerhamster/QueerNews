// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const twitterAPI = require('twitter-lite');

// create static class
class Twitter{

	/**
	 * Initialize twitter client and rss listener
	 */
	static init(){

		Twitter.Client = new twitterAPI({
			consumer_key: Config.config.twitter.consumerKey,
			consumer_secret: Config.config.twitter.consumerSecret,
			access_token_key: Config.config.twitter.accessTokenKey,
			access_token_secret: Config.config.twitter.accessTokenSecret
		});

		RSS.publishListener('twitter', (item, feed) => Twitter.sendArticle(item, feed));

		console.log('[Twitter] Loaded');

	}

	/**
	 * Send article to twitter
	 * @param item
	 * @param feed
	 */
	static sendArticle(item, feed){

		let titleHashtag = feed.feed.title.split('-')[0].trim()
											.split(':')[0].trim()
											.split(' ')[0].trim()
											.replace('.', '');

		// Format text
		let text = `${item.title} von ${feed.feed.title.split('-')[0].trim()}\n${item.link}\n#${titleHashtag} #queer #lgbt #news`;

		// Tweet on twitter
		Twitter.Client.post('statuses/update', {
			status: text
		})
			.then((res) => {})
			.catch((e) => console.error('[Twitter] Error: ', e.message));

	}

}

// export static class
module.exports = Twitter;