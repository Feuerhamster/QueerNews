// import modules
const RSS = require("../rss/main");
const Config = require("../config/main");
const textClass = require("textclass");
const fs = require("fs");

class Filter{

	static modelPath = "./data/model.json";

	/**
	 * Initialize TextClassWeighted and RSS filter function
	 */
	static init(){

		Filter.TCW = new textClass.SingleWeighted();

		Filter.loadModel();

		RSS.RSS.filter((item, feed) => Filter.filter(item));

		console.log("[Filter] loaded");

	}

	/**
	 * Filter an Item with TextClass
	 * @param item
	 * @returns {boolean}
	 */
	static filter(item){

		// Filter for global exclude categories
		if(Config.config.filter.doExcludeCategoriesFilter){

			let exclude = Config.config.filter.globalExcludeCategories.join("|");

			if(item.categories.find((el) => el.match(exclude))){
				return false;
			}

		}

		if(Config.config.filter.textFilter.doFilter){

			let res = Filter.TCW.run(item.title);

			if(res && res.result.confidence >= Config.config.filter.textFilter.filterGap){
				return false;
			}

		}

		return true;

	}

	/**
	 * Train the filter with a text
	 * @param input
	 */
	static train(input){

		// Cancel if text filter learning is deactivated
		if(!Config.config.filter.textFilter.doLearning) return;

		Filter.TCW.learn(input);
		Filter.saveModel();

	}

	/**
	 * Load the trained model
	 */
	static loadModel(){

		if(fs.existsSync(Filter.modelPath)){
			Filter.TCW.model = JSON.parse(fs.readFileSync(Filter.modelPath).toString());
		}else{
			Filter.saveModel();
		}

	}

	/**
	 * Save the trained model
	 */
	static saveModel(){
		fs.writeFileSync(Filter.modelPath, JSON.stringify(Filter.TCW.model, null, 4));
	}

}

module.exports = Filter;