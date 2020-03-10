<template>
    <div class="feed-item" @click="open">
        <div :style="{ backgroundImage: 'url('+img+')' }" class="img"></div>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ formattedDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeedItem",
    props: ["title", "img", "description", "link"],
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
}
.feed-item p{
    margin: 0px;
    text-align: left;
    padding: 0px 10px 10px 10px;
    font-size: 16px;
}
@media (prefers-color-scheme: dark) {
    .feed-item{
        background-color: rgba(0, 0, 0, 0.4);
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
}
</style>