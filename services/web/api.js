// import modules
const express = require("express");
const router = express.Router();
const RSS = require("../rss/main");
const DBNA = require("../dbna/main");
const Config = require("../config/main");

router.get("/", (req, res) => {
	res.send({ api: "QueerNews", homepage: "https://queernews.ml" });
});

router.get("/feeds", (req, res) => {

	let feeds = Object.values(RSS.RSS.feeds().getAll());

	feeds = feeds.filter((f) => RSS.checkFeedScopes(f.feed._source, "web"));

	let titles = Array.from(feeds, el => el.feed.title ? el.feed.title : new URL(el.feed.link).hostname);

	res.send(titles);

});

router.get("/feeds/:id", [], (req, res) => {

	let feed = RSS.RSS.feeds().get(parseInt(req.params.id));

	if(feed && RSS.checkFeedScopes(feed.feed._source, "web")){
		res.send(feed);
	}else{
		res.status(404).send({ error: "feed_not_found" });
	}

});

router.get("/overview", (req, res) => {

	let feeds = Object.values(RSS.RSS.feeds().getAll());

	let newFeeds = [];

	let counter = 0;

	feeds.forEach((feed) => {

		// Check if feed should displayed or not
		if(!RSS.checkFeedScopes(feed.feed._source, "web")) return;

		newFeeds.push({
			_id: counter,
			title: feed.feed.title,
			description: feed.feed.description,
			link: feed.feed.link,
			items: feed.items.slice(0, 5)
		});

		counter++;

	});

	//sort overview by date of first item
	newFeeds.sort((a, b) => {
		a = new Date(a.items[0].pubDate);
		b = new Date(b.items[0].pubDate);
		return a > b ? -1 : a < b ? 1 : 0;
	});

	res.send(newFeeds);

});

router.get("/rss", (req, res) => {

	let rss = RSS.generateRSS();

	res.header("content-type", "application/xml");
	res.send(rss);

});

router.patch("/dbna-analyze-last-posts-manually", (req, res) => {

	if(req.query.password && req.query.password === Config.config.dbna.password){

		DBNA.analyzeLastPosts();

		res.status(200).end();

	}else{
		res.send(401);
	}

});

router.ws("/", (ws, req) => {

	ws.send(JSON.stringify({ type: "connect", status: "success", service: "QueerNews WebSocket API" }));

	ws.on("message", (msg) => {
		ws.send(JSON.stringify({ type: "error", error: "send_not_allowed" }));
		ws.close();
	});

});

router.get("/*", (req, res) => {
	res.status(404).end();
});

// export router
module.exports = router;