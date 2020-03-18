<template>

    <div id="api" class="responsive-content">

        <h1>QueerNews RSS Feed</h1>

        <h1 class="api-heading">
            <img src="@/assets/rss_icon.png" class="inline-icon" alt="RSS" /> <a :href="$store.state.config.endpoint + 'rss/'" target="_blank">Feed abonieren</a>
        </h1>
        <p>
            Unser hauseigener RSS Feed mit den aktuellsten News aus allen Quellen. <br/>
            Bitte nutzt diesen Feed <strong>nicht</strong> um in kurzen Zeitabständen auf Updates zu überprüfen. <br/>Für Benachrichtigungen bei neuen Artikeln gibt es unsere WebSocket API.
        </p>

        <h1>QueerNews REST API Dokumentation</h1>

        <p>Endpunkt für alle APIs: <a :href="$store.state.config.endpoint">{{ $store.state.config.endpoint }}</a></p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/overview
        </h1>
        <p>
            Gibt die Daten der Startseite als JSON zurück. Diese Übersicht beinhaltet alle Feeds und jeweils die 5 neusten Einträge.
        </p>

        <p>
            <strong>Rückgabeschema:</strong><br/>
<pre>
Array[feed][
    {
        "title": string,
        "description": string,
        "link": string,
        "items": Array[item][
            {
                "title": string | null,
                "pubDate": string | null,
                "link": string | null,
                "guid": string | null,
                "author": string | null,
                "thumbnail": string | null,
                "description": string | null,
                "content": string | null,
                "categories": Array[string]
            }
        ]
    }
]
</pre>
        </p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/feeds
        </h1>
        <p>
            Gibt ein Array mit den Titeln aller Feeds zurück
        </p>

        <p>
            <strong>Rückgabeschema:</strong><br/>
<pre>
Array[feed][
    "title"
]
</pre>
        </p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/feeds/{id}
        </h1>
        <p>
            <strong>Parameter:</strong><br/>
            <code>id</code> <i>number</i><br/>
        </p>
        <p>
            <strong>Beschreibung:</strong><br/>
            Gibt einen bestimmten Feed aus.
        </p>

        <p>
            <strong>Rückgabeschema:</strong><br/>
<pre>
{
    "feed": {
        "title": string | null
        "link": string | null
        "url": string | null
        "author": string | null
        "description": string | null
        "image": string | null
    },
    "items": Array[item][

        {
            "title": string | null,
            "pubDate": string | null,
            "link": string | null,
            "guid": string | null,
            "author": string | null,
            "thumbnail": string | null,
            "description": string | null,
            "content": string | null,
            "categories": Array[string]
        }

    ]
}
</pre>
        </p>

        <h1 class="api-heading">
            <span class="green">GET</span> /api/analytics/
        </h1>
        <p>
            <strong>Beschreibung:</strong><br/>
            Stellt Statistiken über die QueerNews Webseite und die API bereit.
        </p>

        <p>
            <strong>Rückgabeschema:</strong><br/>
<pre>
{
    "web": {
        "total": number,
        "average": number,
        "today": number
    },
    "api": {
        "total": number,
        "average": number,
        "today": number
    }
}
</pre>
        </p>



        <h1>QueerNews Websocket API</h1>

        <p>
            Mit der QueerNews Websocket API ist es möglich, bei neuen Artikeln in unseren Quellen live benachrichtigt zu werden.
        </p>

        <p>
            <strong>Verbinden:</strong><br/>
            Mit einem beliebigen Websocket Client eine Websocket Verbindung zu unserem API Endpunkt aufbauen.<br/>
            Bei WebSocket ist zu beachten, dass anstatt des http Protokolls das Websocket Protokoll verwendet werden muss.<br/>
            Beispiel: <a :href="wsUrl">{{ wsUrl }}</a>
        </p>

        <P>
            <strong>Senden:</strong><br/>
            Da keine funktionalität gefordert ist, bei dem der Client eine Nachricht an den Server schickt, wird bei eingehenden Nachrichten die Verbindung aus Sicherheitsgründen getrennt.
        </p>

        <p>
            <strong>Empfangen:</strong><br/>
            Nachrichten werden generell im JSON Format als String geschickt.
            Es gibt zwei Typen von Nachrichten.<br/>
            Der Typ <code>connect</code> der bei einer neuen Verbindung sofort geschickt wird.<br/>
            Der Typ <code>newItem</code> der bei neuen Artikeln gesendet wird.<br/>
        </p>

        <P>
            <strong>Schema:</strong><br/>
            Bei einer Verbindung:<br/>
<pre>
{
    "type": string (connect|newItem),
    "status": string (success),
    "service": string
}
</pre><br/>

        Bei einem neuen Artikel:<br/>
<pre>
{
    "type": string (connect|newItem),
    "feed": {
        "title": string | null
        "link": string | null
        "url": string | null
        "author": string | null
        "description": string | null
        "image": string | null
    },
    "item": {
        "title": string | null,
        "pubDate": string | null,
        "link": string | null,
        "guid": string | null,
        "author": string | null,
        "thumbnail": string | null,
        "description": string | null,
        "content": string | null,
        "categories": Array[string]
    }
}
</pre>
        </p>


    </div>

</template>

<script>
export default {
    name: "Api.vue",
    data(){
        return {
            analytics: null
        }
    },
	mounted: function() {
		let elements = this.$el.querySelectorAll("pre");
        for(let pre of elements){
            pre.innerHTML = pre.innerHTML.replace(/"\w+"/g, m => "<span style='color: orange'>" + m + "</span>");
            pre.innerHTML = pre.innerHTML.replace(/>: ([a-z| ]+)/g, ">: <span style='color: #aa83ff'>$1</span>");
            pre.innerHTML = pre.innerHTML.replace(/\[(\w+)\]/g, "[<span style='color: lightgreen'>$1</span>]");
        }
	},
    computed: {
    	wsUrl: function(){
    		if(this.$store.state.config.endpoint){
				return this.$store.state.config.endpoint.replace(/http|https/, x => x === 'https' ? 'wss' : 'ws')
            }else{
    			return "";
            }

		}
    }
}
</script>

<style scoped>
#api{
    display: flex;
    flex-direction: column;
}
#api > div{
    display: flex;
    align-items: stretch;
    justify-content: stretch;
}
#api h1{
    display: flex;
}
#api p{
    display: block;
    text-align: left;
}
.api-heading{
    font-weight: 500;
    font-family: Consolas, monospace;
    align-items: center;
    margin-bottom: 0px;
}
.api-heading > .green{
    color: #10AC84;
    margin-right: 20px;
}
.inline-icon{
    max-height: 28px;
    margin-right: 10px;
}
code, pre{
    padding: 4px 8px 4px 8px;
    background-color: rgba(250,250,250,0.1);
    border-radius: 4px;
    display: inline-block;
    text-shadow: none;
}
</style>