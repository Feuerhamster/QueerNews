// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');
const Web = require('./services/web/main');
const DBNA = require('./services/dbna/main');
const Telegram = require('./services/telegram/main');
const Twitter = require('./services/twitter/main');
const Filter = require('./services/filter/main');

// execute functions
Config.initConfig();
RSS.initRSS();

if(Config.config.discord.enable){
	DiscordWebhook.init();
}

if(Config.config.dbna.enable){
	DBNA.init();
}

if(Config.config.telegram.enable){
	Telegram.init();
}

if(Config.config.twitter.enable){
	Twitter.init();
}

if(Config.config.web.enable){
	Web.loadRoutes();
	Web.start();
}

if(Config.config.filter.enable){
	Filter.init();
}