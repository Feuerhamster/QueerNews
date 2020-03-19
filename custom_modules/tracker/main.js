const fs = require('fs');

class Tracker {

	data = {};
	path = null;

	constructor(id) {

		this.path = __dirname + `\\data\\${id}.json`;

		//init json file to store data
		if(fs.existsSync(this.path)){
			this.data = JSON.parse(fs.readFileSync(this.path).toString());
		}else{
			if(!fs.existsSync(__dirname + `\\data`)){
				fs.mkdirSync(__dirname + `\\data`);
			}
		}

	}

	count(value, autosave = true){

		let timestamp = new Date();
		timestamp.setHours(0,0,0,0);
		timestamp = timestamp.toString();

		if(this.data[timestamp]){
			this.data[timestamp] += value;
		}else{
			this.data[timestamp] = value;
		}

		if(autosave){
			this.save();
		}
	}

	save(){
		fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4))
	}

}

module.exports = Tracker;