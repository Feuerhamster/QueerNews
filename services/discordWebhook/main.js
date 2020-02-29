// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const axios = require('axios');

// create static class
class DiscordWebhook{

	static registerHandler(){

		RSS.RSS.on('newItem', (item, feed) => DiscordWebhook.sendWebhooks(item, feed));

	}

	static sendWebhooks(item, feed){

		for(let url of Config.config.discord.webhooks){

			axios({
				url: url,
				method: 'post',
				headers: {
					'content-type': 'application/json'
				},
				data: JSON.stringify({ content: `@everyone **${item.title}** von **${feed.title}**\n${item.link}` })
			})
				.then(res => {})
				.catch(err => console.error(err.code));

		}

	}

}

// export static class
module.exports = DiscordWebhook;