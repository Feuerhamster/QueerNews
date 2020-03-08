<template>

    <div class="responsive-content feeds">

        <Sidebar title="Feeds" :items="feeds" @select="selectFeed" :selected="$route.params.id" style="margin-right: 50px;"></Sidebar>

        <FeedCollection :title="currentFeed.feed.title" :description="currentFeed.feed.description" :url="currentFeed.feed.link">
            <feed-item v-for="item in currentFeed.items" :title="item.title" :img="item.thumbnail" :description="item.description" :link="item.link"></feed-item>
        </FeedCollection>

    </div>

</template>

<script>
import Sidebar from '../components/Sidebar'
import FeedCollection from '../components/FeedCollection'
import FeedItem from '../components/FeedItem'

export default {
    name: "Feeds",
    components: {
    	Sidebar, FeedCollection, FeedItem
    },
    data(){
    	return {
    		feeds: [],
            currentFeed: {
    			feed: {},
                items: []
            }
        }
    },
	created() {

		if(this.$store.state.config.endpoint){

			this.fetchFeedList();

			if(this.$route.params.id){
				this.selectFeed(this.$route.params.id);
            }

		}

	},
	watch: {
		'$store.state.config.endpoint': 'fetchFeedList',
	},
	methods: {
		fetchFeedList: function(){

			this.$store.dispatch('fetchFeedList').then(data => {
				this.feeds = data.data;

				if(!this.$route.params.id){
					let randomFeed = Math.floor(Math.random() * data.data.length);
					this.selectFeed(randomFeed);
                }else if(!this.currentFeed.feed.title){
					this.fetchFeed(this.$route.params.id);
                }

			});

		},
        selectFeed: function(item){
			this.$router.replace({ name: 'Feed', params: { id: item } });
			this.fetchFeed(item);
        },
        fetchFeed: function(id){
			this.$store.dispatch('fetchFeed', id).then(data => { this.currentFeed = data.data; });
        }
	}

}
</script>

<style scoped>
.feeds{
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>