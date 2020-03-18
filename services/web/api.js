// import modules
const express = require('express');
const router = express.Router();
const RSS = require('../rss/main');

router.get('/feeds', (req, res) => {

	let feeds = Object.values(RSS.RSS.feeds().getAll());

	let titles = Array.from(feeds, el => el.feed.title);

	res.send(titles);

});

router.get('/feeds/:id', (req, res) => {

	let feed = RSS.RSS.feeds().get(parseInt(req.params.id));

	if(feed){
		res.send(feed);
	}else{
		res.status(404).send({ error: 'feed_not_found' });
	}

});

router.get('/overview', (req, res) => {

	let feeds = Object.values(RSS.RSS.feeds().getAll());

	let newFeeds = [];

	feeds.forEach((feed) => {
		newFeeds.push({
			title: feed.feed.title,
			description: feed.feed.description,
			link: feed.feed.link,
			items: feed.items.slice(0, 5)
		})
	});

	res.send(newFeeds);

});

router.get('/rss', (req, res) => {
	let rss = RSS.generateRSS();
	res.header('content-type', 'application/xml');
	res.send(rss);
});

router.get('/analytics/', (req, res) => {

	let Web = require('./main');

	let webData = Object.values(Web.tracker.webapp.data);
	let apiData = Object.values(Web.tracker.api.data);

	let data = {
		web: {
			total: webData.reduce((a, b) => a + b),
			average: parseFloat((webData.reduce((a, b) => a + b) / webData.length).toFixed(2)),
			today: webData[webData.length-1]
		},
		api: {
			total: apiData.reduce((a, b) => a + b),
			average: parseFloat((apiData.reduce((a, b) => a + b) / apiData.length).toFixed(2)),
			today: apiData[apiData.length-1]
		}
	};

	res.send(data);

});

router.ws('/', (ws, req) => {

	ws.send(JSON.stringify({ type: 'connect', status: 'success', service: 'QueerNews WebSocket API' }));

	ws.on('message', (msg) => {
		ws.send(JSON.stringify({ type: 'error', error: 'send_not_allowed' }));
		ws.close();
	});

});

// export router
module.exports = router;