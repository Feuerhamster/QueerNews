// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');
const Web = require('./services/web/main');

// execute functions
Config.initConfig();
RSS.initRSS();
DiscordWebhook.registerHandler();

//Web.loadRoutes();
//Web.start();