// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const dbnaAPI = require('../../custom_modules/dbna/main');

// create static class
class DBNA{

	static API = new dbnaAPI();

	static initDBNA(){

		DBNA.API.login(Config.config.dbna.username, Config.config.dbna.password, 1)
			.then(data => console.log('[DBNA] Successful logged in'))
			.catch(err => console.error(err));


		console.log('[DBNA] Loaded');
	}

	static registerHandler(){

		RSS.RSS.on('newItem', (item, feed) => DBNA.postNews(item, feed));

	}

	static postNews(item, feed){

		DBNA.API.pulse(Config.config.dbna.group).post(`**${item.title}** von **${feed.feed.title.split(' ')[0]}**\n${item.link}`, Config.config.dbna.group)
			.catch(err => console.error(err));

	}

}

// export static class
module.exports = DBNA;