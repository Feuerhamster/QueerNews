<template>

    <div id="navbar">
        <a href="/" class="brand">
            <img src="@/assets/queernews_paper.png" alt="logo"/>
            <h1>QueerNews</h1>
        </a>
        <span class="spacer"></span>
        <div class="nav-buttons" v-show="nav" @click="toggleNav">
            <router-link to="/" exact>Startseite</router-link>
            <router-link to="/feeds/">Feeds</router-link>
            <router-link to="/about">Über uns</router-link>
            <router-link to="/docs">API</router-link>
            <router-link to="/privacy">Datenschutz</router-link>
        </div>
        <a @click="toggleNav" id="nav-menu-button">
            <img src="@/assets/bar_menu.png" />
        </a>
    </div>

</template>

<script>
export default {
    name: "Navbar",
    data(){
    	return {
    		nav: false
        }
    },
    methods: {
    	toggleNav: function(){
    		if(window.innerWidth <= 920){
				this.nav = !this.nav;
			}
        }
    },
    created() {
		this.nav = window.innerWidth >= 920;
	}
}
</script>

<style scoped>
#navbar{
    background: rgb(238,82,83);
    background: linear-gradient(90deg, rgba(238,82,83,1) 0%, rgba(255,159,67,1) 34%, rgba(16,172,132,1) 67%, rgba(46,134,222,1) 100%);
    display: flex;
    width: 100%;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    align-items: center;
    position: fixed;
    z-index: 2000;
}
.brand{
    display: inline-flex;
    text-decoration: none!important;
}
#navbar > .brand > img{
    max-height: 36px;
    margin: 7px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
    user-select: none;
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
}
#navbar > .spacer{
    display: flex;
    flex-grow: 1;
}
#navbar > .brand >  h1{
    display: flex;
    margin: 0;
    color: white;
    font-weight: 400;
    align-items: center;
    padding: 0 10px 0 10px;
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    user-select: none;
    font-size: 32px;
}
#navbar a {
    color: white;
    text-decoration: none;
    font-size: 21px;
    margin: 0 10px 0 10px;
    text-shadow: 1px 1px rgba(0,0,0,0.2);
    cursor: pointer;
}
#navbar a:hover {
    text-decoration: underline;
}
#navbar a.router-link-active {
    font-weight: 600;
    text-decoration: underline;
}
#nav-menu-button{
    display: flex;
    justify-content: center;
    align-items: center;
}
#nav-menu-button > img{
    max-height: 40px;
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
}

@media only screen and (max-width: 920px) {
    .nav-buttons{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50px;
        width: 100%;
        background: rgb(238,82,83);
        background: linear-gradient(90deg, rgba(238,82,83,1) 0%, rgba(255,159,67,1) 34%, rgba(16,172,132,1) 67%, rgba(46,134,222,1) 100%);
        padding: 0 0 0 20px;
    }
    .nav-buttons > a{
        padding: 5px;
    }
}
@media only screen and (min-width: 921px) {
    #nav-menu-button{
        display: none;
    }
}
</style>