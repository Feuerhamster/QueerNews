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
import favicon from 'get-website-favicon';
export default {
    name: "ItemCollection",
    props: ["title", "description", "id"],
    data(){
    	return {
    		hidden: false,
            icon: ''
        }
    },
    methods: {
    	open: function () {
            this.$router.push('/feeds/' + this.id)
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
    margin: 0px;
    display: flex;
    cursor: pointer;
}
.item-collection > h1:hover{
    text-decoration: underline;
}
.item-collection > p{
    margin: 0px 0px 10px 0px;
    display: flex;
}
.item-collection-body{
    display: flex;
}
@media only screen and (max-width: 920px) {
    .item-collection{
        justify-content: center!important;
    }
    .item-collection-body{
        justify-content: center;
    }
    .item-collection > h1, .item-collection > p{
        justify-content: center;
    }
    .item-collection-body{
        flex-wrap: wrap;
    }
}
</style>