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

router.get('/analytics/:source', (req, res) => {

	let Web = require('./main');

	if(req.params.source && Web.tracker[req.params.source]){

		let data = Web.tracker[req.params.source].data;

		let sliced = Object.entries(data).slice(0, 30);

		data = {};

		sliced.forEach((el) => { data[el[0]] = el[1] });

		res.send(data);


	}else{
		res.status(404).send({ error: 'source_not_found' })
	}

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