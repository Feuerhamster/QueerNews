<template>
    <div class="home">

        <ItemCollection
                v-for="(feed, index) in overview"
                :title="feed.title"
                :description="feed.description"
                :id="index"
        >

            <item-box
                    v-for="item in feed.items"
                    :title="item.title"
                    :img="item.thumbnail"
                    :description="item.description"
                    :link="item.link"
                    ></item-box>

        </ItemCollection>

    </div>
</template>

<script>
import ItemCollection from "../components/ItemCollection";
import ItemBox from "../components/ItemBox";

export default {
    name: 'Home',
    components: {
		ItemCollection,
		ItemBox
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
@media only screen and (max-width: 920px) {
    .home{
        margin-top: 10%;
    }
}

@media only screen and (min-width: 1700px) {
    .home{
        padding: 8% 10% 10% 10%;
    }
}
</style>