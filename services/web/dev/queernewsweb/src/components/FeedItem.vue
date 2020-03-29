<template>
    <div class="feed-item" @click="open">
        <div :style="{ backgroundImage: 'url('+img+')' }" class="img"></div>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ formattedDescription }}</p>
            <span>{{ date }}</span>
        </div>
    </div>
</template>

<script>
import * as Timeago from 'timeago.js';
import DE from 'timeago.js/lib/lang/de';
Timeago.register('de', DE);

export default {
    name: "FeedItem",
    props: ["title", "img", "description", "link", "pubDate"],
    computed: {
        formattedDescription: function(){
            if(this.description){

                let description = this.description.substr(0, 200) + '...';

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
.feed-item{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 4px;
    min-height: 120px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    background-color: rgba(255, 255, 255, 0.5);
    transition: transform ease-in-out 0.05s;
}
.feed-item:hover{
    transform: scale(1.02);
    transition: transform ease-in-out 0.05s;
}
.feed-item > .img{
    display: flex;
    width: 220px;
    min-width: 220px;
    min-height: 120px;
    background-position: center;
    background-size: cover;
    border-radius: 4px 0px 0px 4px;
    margin-right: 20px;
}
.feed-item > div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.feed-item h1{
    margin: 0px;
    display: flex;
    font-weight: 500;
    font-size: 22px;
    padding: 10px;
    word-break: break-word;
}
.feed-item p{
    margin: 0px;
    text-align: left;
    padding: 0px 10px 10px 10px;
    font-size: 16px;
    word-break: break-word;
}
.feed-item span{
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    margin-top: auto;
    padding: 0px 10px 10px 10px;
}
@media (prefers-color-scheme: dark) {
    .feed-item{
        background-color: rgba(0, 0, 0, 0.4);
    }
    .feed-item > div{
        opacity: 0.9;
    }
    .feed-item span {
        color: rgba(255, 255, 255, 0.4);
    }
}
@media only screen and (max-width: 920px) {
    .feed-item{
        flex-direction: column;
    }
    .feed-item > .img{
        width: 100%;
        height: 200px;
    }
    .feed-item > div{
        align-items: center;
    }
    .feed-item p, .feed-item h1{
        text-align: center;
    }
}
</style>