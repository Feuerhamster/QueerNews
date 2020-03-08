// import modules
const Config = require('../config/main');
const express = require('express');

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

	}

	static start(){

		Web.app.listen(Web.port, () => {
			console.log("[Web] server started on port: " + Web.port)
		});

	}

}

// export static class
module.exports = Web;