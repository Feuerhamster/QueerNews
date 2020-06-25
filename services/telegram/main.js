// import modules
const RSS = require('../rss/main');
const Config = require('../config/main');
const axios = require('axios');

// create static class
class Telegram{

	static endpoint = "";

	/**
	 * Init telegram service and append rss listener
	 */
	static init(){

		Telegram.endpoint = "https://api.telegram.org/bot" + Config.config.telegram.token + "/";

		RSS.publishListener('telegram', (item, feed) => Telegram.sendArticle(item, feed));

		console.log('[Telegram] Loaded');

	}

	/**
	 * Send article to telegram channel
	 * @param item
	 * @param feed
	 */
	static sendArticle(item, feed){

		axios({
			url: Telegram.endpoint + 'sendMessage',
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			data: JSON.stringify({
				chat_id: Config.config.telegram.chatId,
				text: `<b>${item.title}</b>\n<i>von <a href="${feed.feed.link}">${feed.feed.title.split('-')[0].trim()}</a></i>\n\n${item.link}`,
				parse_mode: 'HTML'
			})
		})
			.then(res => {})
			.catch(err => console.error('[Telegram]', err.response.data ? err.response.data : err));

	}

}

// export static class
module.exports = Telegram;