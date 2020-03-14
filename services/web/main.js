// import modules
const Config = require('../config/main');
const express = require('express');
const fs = require('fs');
const ws = require('express-ws');
const RSS = require('../rss/main');
const TrackerModule = require('../../custom_modules/tracker/main');
const url = require('url');

// create static class
class Web{

	static app = express();
	static ws = ws(Web.app);
	static port = process.env.PORT || Config.config.web.port;
	static apiRoute = require('./api');
	static cors = require('cors');

	static tracker = {
		api: new TrackerModule('api'),
		webapp: new TrackerModule('webapp')
	};

	static loadRoutes(){

		//tracker
		let parsedHost= url.parse(Config.config.web.frontendConfig.endpoint);

		Web.app.use('/api/*', (req, res, next) => {

			if(req.headers.host){

				if(parsedHost.host !== req.headers.host){
					Web.tracker.api.count(1);
				}

			}else{
				Web.tracker.api.count(1);
			}

			next();
		});
		Web.app.use('/config.json', (req, res, next) => {

			if(req.headers.host){

				if(parsedHost.host === req.headers.host){
					Web.tracker.webapp.count(1);
				}

			}

			next();
		});

		Web.app.use(Web.cors());
		Web.app.use('/api', Web.apiRoute);
		Web.app.use(express.static('./services/web/app'));
		Web.app.use('*', express.static('./services/web/app'));

	}

	static start(){

		Web.initWebConfig();

		Web.app.listen(Web.port, () => {
			console.log("[Web] Server started on port: " + Web.port)
		});

		RSS.RSS.on('newItem', async (item, feed) => Web.sendWebsocket(item, feed));

	}

	static async sendWebsocket(item, feed) {

		//loop over all
		Web.ws.getWss().clients.forEach((client) => {

			client.send(JSON.stringify({
				type: 'newItem',
				item: item,
				feed: feed.feed
			}));

		});

	}

	static initWebConfig(){

		// create config with default schema if not exists
		if(!fs.existsSync('./services/web/app/config.json') || fs.readFileSync('./services/web/app/config.json').toString() === ''){

			fs.writeFileSync('./services/web/app/config.json', JSON.stringify(Config.config.web.frontendConfig, null, 4));

		}

	}

}

// export static class
module.exports = Web;