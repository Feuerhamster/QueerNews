// import modules
const fs = require('fs');

// create static class
class Config{

	static configPath = './config.json';
	static config = {
		dbna: {
			enable: false,
			username: '',
			password: '',
			group: ''
		},
		discord: {
			enable: false,
			webhooks: []
		},
		telegram: {
			enable: false,
			token: '',
			chatId: ''
		},
		rss: {
			feeds: [],
			updateInterval: 120000,
			extraImages: true
		},
		web: {
			enable: false,
			port: 3000,
			frontendConfig: {
				endpoint: 'http://localhost:3000/api/',
				social: {
					telegram: 'https://t.me/QueerNewsChannel',
					dbna: 'https://www.dbna.com/profile/glPhJ_qAvn'
				}
			}
		}
	};

	static initConfig(){

		// create config with default schema if not exists
		if(!fs.existsSync(Config.configPath) || fs.readFileSync(Config.configPath).toString() === ''){

			fs.writeFileSync(Config.configPath, JSON.stringify(Config.config, null, 4));

			console.warn('--- [ Config ] ---\n' +
				'No config file found. A new one has been created. Please fill in data and restart the application!');

			process.exit();

		}

		// get the config
		let config = fs.readFileSync(Config.configPath).toString();
		Config.config = JSON.parse(config);

		console.log('[Config] Loaded');

	}
}

// export static class
module.exports = Config;