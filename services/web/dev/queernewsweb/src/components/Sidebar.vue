<template>

    <div class="sidebar">
        <h1>{{ title }}</h1>
        <select @change="clicked(parseInt($event.target.value))">
            <option v-for="(item, index) in items" :value="index">{{ item.split("-")[0] }}</option>
        </select>
        <ul>
            <li v-for="(item, index) in items" :class="{ active: selectedItem === index }" @click="clicked(index)">{{ item.split(/-|–/)[0] }}</li>
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
    	"selected": "select"
	},
    mounted() {
    	if(this.selected){
    		this.select();
        }
	},
	methods: {
    	clicked: function(item){

			this.selectedItem = item;
    		this.$emit("select", item);
        },
        select: function(){

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
    margin-top: 0;
}
.sidebar > ul{
    list-style: none;
    margin: 0 0 20px 0;
    padding: 0;
}
.sidebar > ul > li{
    font-size: 21px;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    border-radius: 4px;
    transition: transform ease-in-out 0.05s;
}
.sidebar > ul > li:hover{
    background-color: rgba(0, 0, 2, 0.1);
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.05s;
}
.sidebar .active{
    background-color: rgba(0, 0, 2, 0.1);
}
.sidebar > select{
    display: none;
    width: 100%;
    font-size: 21px;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    border-radius: 4px;
    background-color: rgba(0, 0, 2, 0.1);
    color: white;
    border: none;
    outline: 0;
}
.sidebar > select > option{
    color: black;
}
@media only screen and (max-width: 920px) {
    .sidebar{
        width: 100%;
    }
    .sidebar > select{
        display: flex;
    }
    .sidebar > ul{
        display: none;
    }
}
@media only screen and (min-width: 921px){
    .sidebar{
        position: sticky;
        top: 65px;
    }
}
</style>