// import modules
const BetterRSS = require('better-rss');
const Config = require('../config/main');

// create static class
class RSS{

	static RSS = null;

	/**
	 * Start the better-rss module, add event listeners and handle some other things related to rss feeds
	 */
	static initRSS(){

		// Clone rss config
		let adaptedConfig = Object.assign({}, Config.config.rss);

		// Filter feed objects to raw feeds array from config
		// This has to be done because config.rss.feeds is an array of objects and for better-rss we only want to have active feeds and only the url
		adaptedConfig.feeds = adaptedConfig.feeds.filter((f) => f.active).map((f) => f.url);

		// Create instance
		RSS.RSS = new BetterRSS(adaptedConfig);

		// Listen on error event
		RSS.RSS.on('error', (err)=>{
			if(err.code){
				console.error('[RSS] ' + err.code + ' (' + err.address + ')');
			}else{
				console.error('[RSS]', err);
			}
		});

		// Log new item
		RSS.RSS.on('newItem', (item, feed) => {
			console.log(`[RSS] new item "${item.title}" from ${feed.feed.title}`);
		});

		console.log('[RSS] Loaded');

		if(RSS.RSS._updater){
			console.log(`[RSS] Updater running. Interval: ${RSS.RSS.updateInterval / 1000} seconds`);
		}else{
			console.warn('[RSS] Warning: Updater not running!');
		}


	}

	/**
	 * Generates a rss feed based on queernews sources
	 * @returns {*}
	 */
	static generateRSS(){

		let feeds = Object.values(RSS.RSS.feeds().getAll());

		feeds = feeds.filter((f) => RSS.checkFeedScopes(f.feed._source, 'web'));

		let items = [];

		for(let feed of feeds){

			feed.items.slice(0,4).forEach(item => {
				items.push({
					title: {_text: item.title },
					link: {_text: item.link },
					description: {_text: item.description },
					author: {_text: item.author ? item.author : feed.feed.title },
					pubDate: {_text: item.pubDate },
					guid: {_text: item.guid },
					source: {_text: feed.feed.link },
					'media:thumbnail' : {
						_attributes: {
							url: item.thumbnail
						}
					}
				});
			});

		}


		let feed = {
			_declaration: {
				_attributes: { version: "1.0", encoding: "utf-8"}
			},
			rss: {
				_attributes: {version: "2.0", 'xmlns:media': "http://search.yahoo.com/mrss/"},
				channel: {
					title: {_text: "QueerNews"},
					description: {_text: "Aktuelles über LGBT+ Themen"},
					url: {_text: "https://queernews.ml/api/rss"},
					link: {_text: "https://queernews.ml"},
					item: items
				}
			}

		};



		return RSS.RSS._xml.js2xml(feed, {compact: true, spaces: 4});

	}

	/**
	 * Check if the source is enabled for the scope
	 * @param source
	 * @param scope
	 * @returns {boolean}
	 */
	static checkFeedScopes(source, scope){

		let feedConfig = Config.config.rss.feeds.find((f) => f.url === source);

		return feedConfig.active && (feedConfig.scopes.includes(scope) || scope === '*');

	}

	/**
	 * Add listener for the rss newItem event (including scope checks)
	 * @param scope
	 * @param func
	 */
	static publishListener(scope, func){

		RSS.RSS.on('newItem', (item, feed) => {

			if(RSS.checkFeedScopes(feed.feed._source, scope)){
				func(item, feed);
			}

		});

	}

}
// export static class
module.exports = RSS;