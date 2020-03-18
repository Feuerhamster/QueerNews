<template>
    <div id="app">

        <Navbar></Navbar>
        <loading></loading>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Loading from "@/components/Loading";

export default {
	name: 'App',
    components: {
		Navbar,
        Loading
    }
}

</script>

<style>
#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1d2a3c;
    width: 100%;
}
body{
    margin: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #ECEFF1
}
a{
    color: #03A9F4;
}
a:visited{
    color: #838eff;
}
*{
    box-sizing: border-box;
}

.responsive-content{
    padding: 5%;
    align-items: flex-start;
}
@media (prefers-color-scheme: dark) {
    #app{
        color: #ECEFF1;
    }
    body{
        background-color: #1d2a3c;
    }
}
@media only screen and (max-width: 920px) {
    .responsive-content{
        margin-top: 10%;
    }
}
</style>
