class Config{

	configPath = './config.json';
	config = {
		dbna: {
			username: '',
			password: ''
		},
		rss: {
			feeds: [],
			updateInterval: 120000
		}
	};

	constructor() {

		// load modules
		this._fs = require('fs');

		// execute functions
		this.initConfig();

		console.log('[Config] Loaded');

	}

	initConfig(){

		// create config with default schema if not exists
		if(!this._fs.existsSync(this.configPath)){

			this._fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 4));

			console.warn('--- [ Config ] ---\n' +
				'No config file found. A new one has been created. Please fill in data and restart the application!');

			process.exit();

		}

		// get the config
		let config = this._fs.readFileSync(this.configPath);
		config = JSON.parse(config);

		this.config = config;

	}
}



module.exports = Config;