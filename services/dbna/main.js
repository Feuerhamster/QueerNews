// import modules
const RSS = require("../rss/main");
const Config = require("../config/main");
const dbnaAPI = require("../../custom_modules/dbna/main");
const Filter = require("../filter/main");
const schedule = require("node-schedule");

// create static class
class DBNA{

	static API = new dbnaAPI();

	/**
	 * Method to initialize the DBNA service
	 * Do things like login, rss listener, analytics schedule, ...
	 */
	static init(){

		// Log in to DBNA with credentials from config
		DBNA.API.login(Config.config.dbna.username, Config.config.dbna.password, 1)
			.then((data) => console.log("[DBNA] Successful logged in"))
			.catch((err) => console.error(err.data ? err.data : err));

		// Register handler for RSS
		RSS.publishListener("dbna", (item, feed) => DBNA.postNews(item, feed));

		// Start schedule Job for post analyzer
		if(Config.config.dbna.analytics.analyzePosts){
			console.log("[DBNA] Started analyzer schedule");
			schedule.scheduleJob(Config.config.filter.schedule, () => DBNA.analyzeLastPosts());
		}

		console.log("[DBNA] Loaded");
	}

	/**
	 * Post on DBNA in group
	 * @param item
	 * @param feed
	 */
	static postNews(item, feed){

		//stop function contains an excluded category special for DBNA
		let exclude = Config.config.dbna.excludeCategories.join("|");
		if(item.categories.find((el) => el.match(exclude))){
			return;
		}

		let template = `> **${item.title}**\n\n*von ${feed.feed.title.split("-")[0].trim()}*\n${item.link}`;

		DBNA.API.pulse(Config.config.dbna.group).post(template, Config.config.dbna.group)
			.catch((err) => console.error("[DBNA] ", err.data ? err.data : err));

	}

	/**
	 * Analyze all current posts (without pagination) on DBNA for filtering
	 * @returns {Promise<void>}
	 */
	static analyzeLastPosts(){

		console.log("[DBNA] Analyze posts for filter training...");

		DBNA.API.pulse(Config.config.dbna.group).getCurrent()
			.then((pulse) => {

				// Loop over all stories
				for(let story of pulse.stories){

					// Check if story is already processed
					if(!story.hearts.has){
						// If not, heart it to set it as processed
						DBNA.API.story(story.id).heart();

						// Skip if there are comments. Because this means, the content is relevant.
						if(story.comments.count > Config.config.dbna.analytics.commentLearnGap) continue;

						if(story.embed && story.embed.title){
							Filter.train(story.embed.title);
						}

					}

				}


			})
			.catch((e) => {
				console.error("[DBNA] ", e);
			})

	}

}

// export static class
module.exports = DBNA;