<template>

    <div class="social-links">
        <h4>Folge uns im Internet</h4>
        <a title="Telegram Channel" :href="$store.state.config.social.telegram" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2000px-Telegram_logo.svg.png" alt="Telegram" />
        </a>
        <a title="DBNA Gruppe" :href="$store.state.config.social.dbna" target="_blank">
            <img src="https://www.dbna.com/favicon.ico" alt="DBNA" />
        </a>
        <a title="RSS Feed" :href="$store.state.config.endpoint + 'rss/'" target="_blank">
            <img src="@/assets/rss_icon.png" alt="RSS"/>
        </a>
        <a title="Discord Server" :href="$store.state.config.social.discord" target="_blank">
            <img src="@/assets/discord.png" alt="Discord" />
        </a>
    </div>
</template>

<script>
export default {
    name: "Social.vue"
}
</script>

<style scoped>
.social-links{
    margin: 20px 0px 20px 0px;
}
.social-links > a > img{
    height: 40px;
    margin: 5px 10px 5px 10px;
    border-radius: 4px;
}
.social-links > a{
    display: inline-block;
    transition: transform ease-in-out 0.05s;
}
.social-links > a:hover{
    transform: scale(1.15);
    transition: transform ease-in-out 0.05s;
}
</style>