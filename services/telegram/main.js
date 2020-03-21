// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const axios = require('axios');

// create static class
class Telegram{

	static endpoint = "";

	static registerHandler(){

		Telegram.endpoint = "https://api.telegram.org/bot" + Config.config.telegram.token + "/";

		RSS.RSS.on('newItem', (item, feed) => Telegram.sendArticle(item, feed));
		console.log('[Telegram] Loaded');

	}

	static sendArticle(item, feed){


		axios({
			url: Telegram.endpoint + 'sendMessage',
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			data: JSON.stringify({
				chat_id: Config.config.telegram.chatId,
				text: `*${item.title}* von *${feed.feed.title.split('-')[0]}*\n\n${item.link}`,
				parse_mode: 'Markdown'
			})
		})
			.then(res => {})
			.catch(err => console.error(err));

	}

}

// export static class
module.exports = Telegram;