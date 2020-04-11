# QueerNews Project

## Installation
1. Backend/Main installation
    1. Download the repository
    2. Go in to the root directory and run `npm install`
2. Frontend Build
    1. Go into /services/web/dev/queernewsweb and run `npm install`
    2. Run `npm run build` in /services/web/dev/queernewsweb
    3. Copy the content of /services/web/dev/queernewsweb/dist/ directory to /services/web/app/
3. Configuration and start
    1. Go in the root directory and run `npm start`
    2. On first start, the program will be automatically quit with an error message. 
        This says, that no config file was found and a new one has been created. 
        If you created a config.json in the root directory before (must be empty!), a template has been inserted.
    3. Open /config.json and fill out all the generated fields
    4. run `npm start` again in root directory.

## Services
The entire project is modular. 
That means, that every feature has a dedicated directory and files in /services/.
Every service is a static class that will be exported as node module.
In *main.js* the services will be required and executed by calling one of the static methods of the static class.

#### List of all current services
- **Config** | Handles all around the configuration files
- **dbna** | Integration of DBNA-API-v2 to post news in group pulse
- **discordWebhook** | Send news to discord webhook urls (defined in config)
- **rss** | RSS Feeds are the data source of the entire project is based on.
            Here is the `better-rss` npm package used to get the feeds and updates.
- **telegram** | Send news updates to telegram bot api
- **web** | Handles the web page and our api. Its based on `express.js` and `Vue.js` for the frontend WebApp.

## Feedproxy
Some feeds has issues with the xml charset or has simply a title that is unsuitable for the QueerNews application.
For that cases, we have a proxy for rss feeds.

##### **GET** https://hamsterlabs.de/feedproxy.php
##### URL Params:
`url` | *required* | The url of your rss feed

`method` | *required* | One of these two methods:
 - **charset** | Change the charset of the xml to UTF-8
 - **changeTitle** | Change the title of a feed
 
`value` | Only required on **changeTitle**

##### Response:
The XML of your RSS Feed

## Dependencies
One of the core modules of the QueerNews backend is the better-rss library, which was developed especially for this project.
https://github.com/Feuerhamster/better-rss

#### Custom modules
- dbna (https://github.com/Feuerhamster/DBNA-API-v2)
- tracker (currently not used)

#### Other Dependencies:
##### Backend:
- axios
- axios-cookiejar-support
- better-rss
- cors
- express
- express-ws
- tough-cookie

##### Frontend:
- axios
- register-service-worker
- timeago.js
- vue
- vue-router
- vuex

## Current platforms
QueerNews is present on various platforms on the Internet, whose profiles are operated by the services.
- DBNA Group (https://www.dbna.com/profile/glPhJ_qAvn)
- Discord Server \[#queer-news] (https://discordapp.com/invite/9xCV2Km)
- Telegram Channel (https://t.me/QueerNewsChannel)

## Members and project management
The development of QueerNews is organized via a Trello board: https://trello.com/b/cxE9ER5A/queernews

The project is maintained by two people:
- [Feuerhamster](https://github.com/Feuerhamster/) | Main developer
- [Bluemedia](https://github.com/BluemediaGER) | Hosting & Deployment