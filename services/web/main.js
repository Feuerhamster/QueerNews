// import modules
const Config = require("../config/main");
const express = require("express");
const fs = require("fs");
const ws = require("express-ws");
const RSS = require("../rss/main");

// create static class
class Web{

	static app = express();
	static ws = ws(Web.app);
	static port = process.env.PORT || Config.config.web.port;
	static apiRoute = require("./api");
	static cors = require("cors");

	/**
	 * Load routes for express app
	 */
	static loadRoutes(){

		Web.app.use(Web.cors());
		Web.app.use("/api", Web.apiRoute);
		Web.app.use(express.static("./services/web/app"));
		Web.app.use("*", express.static("./services/web/app"));

	}

	/**
	 * Start webserver and listeners
	 */
	static start(){

		Web.initWebConfig();

		Web.app.listen(Web.port, () => {
			console.log("[Web] Server started on port: " + Web.port)
		});

		RSS.publishListener("*", async (item, feed) => Web.sendWebsocket(item, feed));

	}

	/**
	 * Send article to websocket api
	 * @param item
	 * @param feed
	 * @returns {Promise<void>}
	 */
	static async sendWebsocket(item, feed) {

		//loop over all
		Web.ws.getWss().clients.forEach((client) => {

			client.send(JSON.stringify({
				type: "newItem",
				item: item,
				feed: feed.feed
			}));

		});

	}

	/**
	 * Config handling for frontend (vue.js app)
	 */
	static initWebConfig(){

		// Write web config from main config
		fs.writeFileSync("./services/web/app/config.json", JSON.stringify(Config.config.web.frontendConfig, null, 4));

	}

}

// export static class
module.exports = Web;