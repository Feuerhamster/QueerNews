<template>

    <div class="sidebar">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="(item, index) in items" :class="{ active: selectedItem === index }" @click="clicked(index)">{{ item.split('-')[0] }}</li>
        </ul>

        <social></social>
    </div>

</template>

<script>
import Social from "./Social";
export default {
    name: "Sidebar.vue",
	components: {Social},
	props: ["title", "items", "selected"],
    data(){
    	return {
    		selectedItem: 0
        }
    },
    watch: {
    	'selected': 'select'
	},
    mounted() {
    	if(this.selected){
    		this.select();
        }
	},
	methods: {
    	clicked: function(item){
			this.selectedItem = item;
    		this.$emit('select', item);
        },
        select: function(){

            console.log(this.selected);
            this.selectedItem = parseInt(this.selected);

        }
    }
}
</script>

<style scoped>
.sidebar{
    min-width: 260px;
}
.sidebar > h1{
    margin-top: 0px;
}
.sidebar > ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.sidebar > ul > li{
    font-size: 21px;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    border-radius: 4px;
}
.sidebar > ul > li:hover{
    background-color: rgba(0,0,0,0.05);
    cursor: pointer;
}
.sidebar .active{
    background-color: rgba(0,0,0,0.07);
}
</style>