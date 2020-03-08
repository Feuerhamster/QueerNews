import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import Router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: true,
		config: {}
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

			context.commit('SET_LOADING_STATUS', true);

			try{

				let result = await Axios.get('/config.json');
				context.commit('SET_CONFIG', result.data);

			}catch (e) {
				await Router.push({name: 'error', params: {err: 'connection'}});
			}finally {
				context.commit('SET_LOADING_STATUS', false);
			}

		},

		async fetchOverview(context){

			context.commit('SET_LOADING_STATUS', true);

			try{

				return await Axios.get(context.state.config.endpoint + 'overview');

			}catch (e) {
				await Router.push({name: 'error', params: {err: 'connection'}});
			}finally {
				context.commit('SET_LOADING_STATUS', false);
			}

		},

		async fetchFeedList(context){

			context.commit('SET_LOADING_STATUS', true);

			try{

				return await Axios.get(context.state.config.endpoint + 'feeds');

			}catch (e) {
				await Router.push({name: 'error', params: {err: 'connection'}});
			}finally {
				context.commit('SET_LOADING_STATUS', false);
			}

		},

		async fetchFeed(context, index){

			try{

				return await Axios.get(context.state.config.endpoint + 'feeds/' + index);

			}catch (e) {
				await Router.push({name: 'error', params: {err: 'connection'}});
			}

		}

	},
	modules: {
	}
})