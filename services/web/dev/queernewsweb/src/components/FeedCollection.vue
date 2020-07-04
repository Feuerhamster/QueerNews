<template>

    <div class="feed-collection">
        <h1>{{ title }}</h1>
        <span>Quelle: <a :href="url" target="_blank">{{ url }}</a></span>
        <p>{{ description }}</p>
        <div class="feed-collection-body" v-show="!hidden">
            <slot />
        </div>
    </div>

</template>

<script>
export default {
    name: "FeedCollection",
    props: ["title", "description", "url"],
    data(){
        return {
            hidden: false,
        }
    }
}
</script>

<style scoped>
.feed-collection{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 50px;
    flex-wrap: wrap;
}
.feed-collection > h1{
    margin: 0;
    display: flex;
}
.feed-collection{
    display: inline-flex;
}
.feed-collection > span, .feed-collection a{
    word-break: break-all;
}
.feed-collection > p{
    margin: 0 0 10px 0;
    display: flex;
    text-align: left;
}
.feed-collection-body{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
}
@media only screen and (max-width: 920px) {
    .feed-collection{
        align-items: center!important;
    }
    .feed-collection > p{
        text-align: center;
    }
}
</style>