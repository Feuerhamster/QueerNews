// import modules
const express = require('express');
const router = express.Router();
const RSS = require('../rss/main');

router.get('/feeds', (req, res) => {

	let feeds = RSS.RSS.feeds().get(false);

	let titles = [];

	for (let i = 0; i < feeds.length; i++) {
		RSS.RSS.fetchFeed(feeds[i]).then((feed) => {

			titles.push(/([a-z0-9.]+) ?/gi.exec(feed.title)[1]);

			if(i === feeds.length-1){
				res.send(titles);
			}

		});
	}

});

router.get('/feeds/:id', (req, res) => {

	RSS.RSS.fetchFeed(parseInt(req.params.id))
		.then((feed) => {
			res.send(feed);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send(err);
		});

});


// export router
module.exports = router;