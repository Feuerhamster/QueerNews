<template>
    <div class="home responsive-content">

        <ItemCollection
                v-for="feed in overview"
                :title="feed.title"
                :description="feed.description"
                :id="feed._id"
        >

            <item-box
                    v-for="item in feed.items"
                    :title="item.title"
                    :img="item.thumbnail"
                    :description="item.description"
                    :link="item.link"
                    :pubDate="item.pubDate"
                    ></item-box>

        </ItemCollection>

        <Social></Social>

    </div>
</template>

<script>
import ItemCollection from "../components/ItemCollection";
import ItemBox from "../components/ItemBox";
import Social from "../components/Social";

export default {
    name: 'Home',
    components: {
		ItemCollection,
		ItemBox,
        Social
    },
    data(){
    	return {
    		overview: []
        }
    },
    created() {
    	if(this.$store.state.config.endpoint){
    		this.fetchOverview();
        }
	},
	watch: {
    	'$store.state.config.endpoint': 'fetchOverview'
    },
    methods: {
    	fetchOverview: function(){

			this.$store.dispatch('fetchOverview').then(data => { this.overview = data.data; });

		}
    }
}
</script>
<style scoped>
.home{
    display: flex;
    flex-direction: column;
    padding: 5%;
    align-items: center;
}

@media only screen and (min-width: 1700px) {
    .home{
        padding: 8% 10% 10% 10%;
    }
}
</style>