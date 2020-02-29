// import modules
const BetterRSS = require('better-rss');
const Config = require('../config/main');

// create static class
class RSS{

	static RSS = null;

	static initRSS(){
		RSS.RSS = new BetterRSS(Config.config.rss);
	}

}
// export static class
module.exports = RSS;