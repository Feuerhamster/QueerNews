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

		//stop function contains an excluded category
		let exclude = Config.config.rss.globalExcludeCategories.join('|');
		if(item.categories.find((el) => el.match(exclude))){
			return;
		}

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