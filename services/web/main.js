// import modules
const Config = require('../config/main');
const express = require('express');
const fs = require('fs');

// create static class
class Web{

	static app = express();
	static port = process.env.PORT || Config.config.web.port;
	static apiRoute = require('./api');
	static cors = require('cors');

	static loadRoutes(){

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

	}

	static initWebConfig(){

		// create config with default schema if not exists
		if(!fs.existsSync('./services/web/app/config.json') || fs.readFileSync(path).toString() === ''){

			fs.writeFileSync('./services/web/app/config.json', JSON.stringify(Config.config.web.frontendConfig, null, 4));

		}

	}

}

// export static class
module.exports = Web;