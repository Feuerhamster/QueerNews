<template>

    <div id="api" class="responsive-content">

        <h1>QueerNews API Dokumentation</h1>

        <p>Endpunkt für alle APIs: <strong>{{ endpoint }}</strong></p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/overview
        </h1>
        <p>
            Gibt die Daten der Startseite als JSON zurück
        </p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/feeds
        </h1>
        <p>
            Gibt ein Array mit den Titeln aller Feeds zurück
        </p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/feeds/{id}
        </h1>
        <p>
            Gibt einen bestimmten Feed aus.
        </p>

    </div>

</template>

<script>
export default {
    name: "Api.vue",
    data(){
    	return {
    		endpoint: ""
        }
    },
    computed: {
    	getEndpoint: function(){
            return this.$store.state.config.endpoint
        }
    }
}
</script>

<style scoped>
#api{
    display: flex;
    flex-direction: column;
}

#api h1, #api p{
    display: inline-flex;
}

.api-heading{
    font-weight: 500;
    font-family: Consolas, monospace;
}
.api-heading > .green{
    color: #10AC84;
    margin-right: 20px;
}
</style>