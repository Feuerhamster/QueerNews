import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import Router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: true,
		config: {
			endpoint: null,
			social: {
				telegram: null,
				dbna: null,
				discord: null,
				twitter: null
			}
		}
	},
	mutations: {

		SET_LOADING_STATUS(state, status){
			if(status){
				state.loading = status;
			}else{
				setTimeout(()=>{
					state.loading = status;
				}, 500);
			}
		},

		SET_CONFIG(state, config){
			state.config = config;
		}

	},
	actions: {

		async fetchConfig(context){

			context.commit("SET_LOADING_STATUS", true);

			try{

				let result = await Axios.get("/config.json", { headers: { "qs-from": "queernews" } });
				context.commit("SET_CONFIG", result.data);

			}catch (e) {
				await Router.push({name: "error", params: {err: "connection"}});
			}finally {
				context.commit("SET_LOADING_STATUS", false);
			}

		},

		async fetchOverview(context){

			context.commit("SET_LOADING_STATUS", true);

			try{

				return await Axios.get(context.state.config.endpoint + "overview", { headers: { "qs-from": "queernews" } });

			}catch (e) {
				await Router.push({name: "error", params: {err: "connection"}});
			}finally {
				context.commit("SET_LOADING_STATUS", false);
			}

		},

		async fetchFeedList(context){

			context.commit("SET_LOADING_STATUS", true);

			try{

				return await Axios.get(context.state.config.endpoint + "feeds", { headers: { "qs-from": "queernews" } });

			}catch (e) {
				await Router.push({name: "error", params: {err: "connection"}});
			}finally {
				context.commit("SET_LOADING_STATUS", false);
			}

		},

		async fetchFeed(context, index){

			try{

				return await Axios.get(context.state.config.endpoint + "feeds/" + index, { headers: { "qs-from": "queernews" } });

			}catch (e) {
				await Router.push({name: "error", params: {err: "connection"}});
			}

		},

		async fetchAnalytics(context, type){

			try{

				return await Axios.get(context.state.config.endpoint + "analytics/" + type, { headers: { "qs-from": "queernews" } });

			}catch (e) {
				await Router.push({name: "error", params: {err: "connection"}});
			}

		}

	},
	modules: {
	}
});
