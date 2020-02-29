class RSS {

	constructor() {

		this._config = require('../../main.js').Config;

		const BetterRSS = require('better-rss');
		this._rss = new BetterRSS(this._config.config.rss);

		this.init();

	}

	init(){

		this._rss.on('updating', () => {
			console.log("[RSS] updating...")
		});

	}

	on(event, callback){

		this._rss.on(event, callback);

	}

}

module.exports = RSS;