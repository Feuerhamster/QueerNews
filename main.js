// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');
const Web = require('./services/web/main');
const DBNA = require('./services/dbna/main');
const Telegram = require('./services/telegram/main');

// execute functions
Config.initConfig();
RSS.initRSS();

if(Config.config.discord.enable){
	DiscordWebhook.registerHandler();
}

if(Config.config.dbna.enable){
	DBNA.initDBNA();
}

if(Config.config.telegram.enable){
	Telegram.registerHandler();
}

if(Config.config.web.enable){
	Web.loadRoutes();
	Web.start();
}
