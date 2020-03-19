<template>

    <div class="item-box" @click="open">
        <div :style="{ backgroundImage: 'url('+img+')' }">

        </div>
        <h1>{{ title }}</h1>
        <p>{{ formattedDescription }}</p>
        <span>{{ date }}</span>
    </div>

</template>

<script>
import * as Timeago from 'timeago.js';
import DE from 'timeago.js/lib/lang/de';
Timeago.register('de', DE);

export default {
    name: "ItemBox",
    props: ["title", "img", "description", "link", "pubDate"],
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

        },
        date: function(){
            if(this.pubDate){
                return Timeago.format(new Date(this.pubDate), 'de');
            }else{
            	return '';
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
    transition: transform ease-in-out 0.05s;
}
.item-box:hover{
    transform: scale(1.03);
    transition: transform ease-in-out 0.05s;
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
    word-break: break-word;
}
.item-box > p{
    margin: 0px;
    display: inline-flex;
    width: 100%;
    padding: 0px 10px 10px 10px;
    font-size: 14px;
}
.item-box > span{
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    margin-top: auto;
    padding: 5px;
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
    .item-box > div{
        opacity: 0.9;
    }
    .item-box > span {
        color: rgba(255, 255, 255, 0.4);
    }
}
</style>