// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');
const Web = require('./services/web/main');
const DBNA = require('./services/dbna/main');

// execute functions
Config.initConfig();
RSS.initRSS();
//DiscordWebhook.registerHandler();
//DBNA.initDBNA();

Web.loadRoutes();
Web.start();