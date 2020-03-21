// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const axios = require('axios');

// create static class
class DiscordWebhook{

	static registerHandler(){

		RSS.RSS.on('newItem', (item, feed) => DiscordWebhook.sendWebhooks(item, feed));
		console.log('[Discord] Loaded');

	}

	static sendWebhooks(item, feed){

		for(let hook of Config.config.discord.webhooks){

			let mention = hook.mention ? hook.mention : "";

			if(!hook.url) return;

			axios({
				url: hook.url,
				method: 'post',
				headers: {
					'content-type': 'application/json'
				},
				data: JSON.stringify({ content: `${mention} **${item.title}** von **${feed.feed.title.split('-')[0].trim()}**\n${item.link}` })
			})
				.then(res => {})
				.catch(err => console.error('[Discord]', err.response.data ? err.response.data : err));

		}

	}

}

// export static class
module.exports = DiscordWebhook;