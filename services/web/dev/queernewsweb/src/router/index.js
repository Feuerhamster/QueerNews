import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Error from '../views/Error';
import About from '../views/About';
import Api from "../views/Api";
import Feeds from "../views/Feeds";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: function () {
			return import('../views/Dashboard.vue')
		}
	},
	{
		path: '/feeds',
		name: 'Feeds',

		component: Feeds,

		children: [
			{
				path: ':id',
				name: 'Feed',
				props: true,
				component: Feeds
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/docs',
		name: 'docs',
		component: Api
	},
	{
		path: '/error/:err',
		name: 'error',
		component: Error,
		props: true
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
