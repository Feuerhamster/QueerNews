<template>
    <div class="loading-frame" v-show="showLoading">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
</template>

<script>
export default {
    name: "Loading.vue",
    computed: {
    	showLoading: function(){
    		return this.$store.state.loading
        }
    }
}
</script>

<style scoped>
.loading-frame{
    position: absolute;
    top: 50px;
    width: 100%;
    height: calc(100% - 50px);
    background-color: #ecf0f1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid #10AC84;
    border-radius: 50%;
    animation: lds-ring 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #EE5253 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.1s;
    border-color:#EE5253 transparent transparent transparent;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.05s;
    border-color: #EE5253 transparent transparent transparent;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.05s;
    border-color: #EE5253 transparent transparent transparent;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@media (prefers-color-scheme: dark) {
    .loading-frame{
        background-color: #1d2a3c;
    }
}

</style>