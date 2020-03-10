<template>

    <div class="social-links">
        <h4>Folge uns im Internet</h4>
        <a title="Telegram Channel" :href="telegram" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2000px-Telegram_logo.svg.png" />
        </a>
        <a title="DBNA Gruppe" :href="dbna" target="_blank">
            <img src="https://www.dbna.com/favicon.ico" />
        </a>
    </div>
</template>

<script>
	export default {
		name: "Social.vue",
        data(){
            return {
            	telegram: "",
                dbna: ""
            }
        },
        created() {
			if(this.$store.state.config.social && this.$store.state.config.social.telegram && this.$store.state.config.social.dbna){
				this.setTelegram();
				this.setDBNA();
            }
		},
		watch: {
		    '$store.state.config.social.telegram': 'setTelegram',
		    '$store.state.config.social.dbna': 'setDBNA'
        },
        methods: {
			setTelegram: function(){
				this.telegram = this.$store.state.config.social.telegram;
            },
			setDBNA: function(){
				this.dbna = this.$store.state.config.social.dbna;
			}
        }
	}
</script>

<style scoped>
.social-links > a > img{
    height: 40px;
    margin: 5px 10px 5px 10px;
    border-radius: 4px;
}
</style>