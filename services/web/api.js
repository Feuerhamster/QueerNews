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


// export router
module.exports = router;