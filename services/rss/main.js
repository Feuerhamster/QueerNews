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
			console.log(`[RSS] new item "${item.title}" from ${feed.title}`);
		});

		console.log('[RSS] Loaded');

	}

}
// export static class
module.exports = RSS;