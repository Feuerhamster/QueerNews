<template>

    <div class="item-collection">
        <h1 @click="open">{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="item-collection-body" v-show="!hidden">
            <slot />
        </div>
    </div>

</template>

<script>
export default {
    name: "ItemCollection",
    props: ["title", "description", "id"],
    data(){
    	return {
    		hidden: false,
            icon: ""
        }
    },
    methods: {
    	open: function () {
            this.$router.push("/feeds/" + this.id)
		}
    }
}
</script>

<style scoped>
.item-collection{
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 50px;
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
}
.item-collection > h1{
    margin: 0;
    display: flex;
    cursor: pointer;
}
.item-collection > h1:hover{
    text-decoration: underline;
}
.item-collection > p{
    margin: 0 0 10px 0;
    display: flex;
}
.item-collection-body{
    display: flex;
}
@media only screen and (max-width: 920px) {
    .item-collection{
        align-items: center!important;
    }
    .item-collection-body{
        flex-wrap: wrap;
    }
}

@media only screen and (min-width: 921px) and (max-width: 1300px) {
    .item-collection-body{
        flex-wrap: wrap;
    }
}
</style>