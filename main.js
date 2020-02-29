// import services
const Config = require('./services/config/main');
const RSS = require('./services/rss/main');
const DiscordWebhook = require('./services/discordWebhook/main');

// export service instances
exports.Config = new Config();
exports.RSS = new RSS();
exports.DiscordWebhook = new DiscordWebhook();