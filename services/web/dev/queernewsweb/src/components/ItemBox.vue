<template>

    <div class="item-box" @click="open">
        <div :style="{ backgroundImage: 'url('+img+')' }">

        </div>
        <h1>{{ title }}</h1>
        <p>{{ formattedDescription }}</p>
    </div>

</template>

<script>
export default {
    name: "ItemBox",
    props: ["title", "img", "description", "link"],
    computed: {
    	formattedDescription: function(){
    		if(this.description){

				let description = this.description.substr(0, 100) + '...';

				var temporalDivElement = document.createElement("div");
				temporalDivElement.innerHTML = description;

				return temporalDivElement.textContent || temporalDivElement.innerText || "";

			}else{
    			return "";
            }

        }
    },
    methods: {
    	open: function(){
    		window.open(this.link, '_blank');
        }
    }
}
</script>

<style scoped>
.item-box{
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
}
.item-box > div{
    display: inline-flex;
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    align-self: flex-start;
    border-radius: 4px 4px 0px 0px;
}
.item-box > h1{
    margin: 0px;
    display: flex;
    font-weight: 500;
    font-size: 20px;
    padding: 10px;
}
.item-box > p{
    margin: 0px;
    display: inline-flex;
    width: 100%;
    padding: 0px 10px 10px 10px;
    font-size: 14px;
}

@media only screen and (max-width: 920px) {
    .item-box, .item-box > div{
        width: 100%;
    }
}
@media (prefers-color-scheme: dark) {
    .item-box{
       background-color: rgba(0, 0, 0, 0.4);
    }
}
</style>