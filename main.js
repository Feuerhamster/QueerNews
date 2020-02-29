// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');

// execute functions
Config.initConfig();
RSS.initRSS();
DiscordWebhook.registerHandler();

// add listeners
RSS.RSS.on('updating', ()=>{
	console.log('[RSS] updating...');
});
RSS.RSS.on('error', (err)=>{
	console.error('[RSS] ' + err.code + ' (' + err.address + ')');
});
