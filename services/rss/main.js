// import modules
const BetterRSS = require('better-rss');
const Config = require('../config/main');

// create static class
class RSS{

	static RSS = null;

	static initRSS(){

		RSS.RSS = new BetterRSS(Config.config.rss);

		// add listeners
		RSS.RSS.on('updating', ()=>{
			console.log('[RSS] updating...');
		});

		RSS.RSS.on('error', (err)=>{
			if(err.code){
				console.error('[RSS] ' + err.code + ' (' + err.address + ')');
			}else{
				console.error(err);
			}
		});

		RSS.RSS.on('newItem', (item, feed) => {
			console.log(`[RSS] new item "${item.title}" from ${feed.feed.title}`);
		});

		console.log('[RSS] Loaded');

	}

	static generateRSS(){

		let feeds = Object.values(RSS.RSS.feeds().getAll());

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

}
// export static class
module.exports = RSS;