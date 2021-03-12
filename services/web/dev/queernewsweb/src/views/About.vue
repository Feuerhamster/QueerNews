<template>

    <div id="about">

        <div id="about-header">

            <img src="@/assets/logo.png" alt="logo"/>
            <div>
                <h1>Das ist QueerNews</h1>
                <h2>Vertreten auf verschiedenen Plattformen bieten wir aktuelle News<br/> aus bekannten Quellen rund um die LGBTQ+ Community</h2>
            </div>

        </div>

        <div id="about-content" class="responsive-content">

            <div>

                <h1>QueerNews im Internet</h1>

                <div class="card-wrapper">
                    <div class="about-card">
                        <a :href="$store.state.config.social.discord" target="_blank">
                            <i class="fab fa-discord"></i>
                            <h2>Discord</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.social.telegram" target="_blank">
                            <i class="fab fa-telegram-plane"></i>
                            <h2>Telegram</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.social.dbna" target="_blank">
                            <svg viewBox="0 0 312 182" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                    <g id="Icon" transform="translate(-100.000000, -135.000000)" stroke-width="19">
                                        <path d="M323.066161,304.761861 C323.066161,266.614711 298.202109,228.233523 259.352594,228.556627 C214.753458,228.21931 195.889639,268.388468 188.731339,291.498478 C185.933885,300.528342 177.246576,306.045751 168.302321,304.504136 C157.562158,302.652682 150.71147,291.475737 153.57497,280.478822 L155.005364,274.985101 C161.484203,243.842018 179.179099,217.240397 205.830012,201.587368 C239.710698,181.686608 281.344098,180.686027 314.481088,204.055658 C328.283794,213.789529 339.360521,227.190303 347.670553,242.211336 C355.348173,256.08966 360.786562,271.304934 364.348522,286.881213 C364.379283,287.018604 364.468852,287.439303 364.599135,288.070351 C366.788604,298.667413 376.698217,305.458288 386.843966,303.29889 L386.88287,303.290363 C396.899241,301.158443 403.483031,291.073989 401.746835,280.52525 L400.34087,271.985253 C375.611624,140.595513 259.201502,145.017589 259.200597,145.017589 C173.617665,145.017589 110,222.363637 110,307.166667" id="rainbowvector_1"></path>
                                    </g>
                                </g>
                            </svg>

                            <h2>DBNA</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.social.twitter" target="_blank">
                            <i class="fab fa-twitter"></i>
                            <h2>Twitter</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.endpoint + 'rss'" target="_blank">
                            <i class="fa fa-rss"></i>
                            <h2>RSS Feed</h2>
                        </a>
                    </div>

                </div>

            </div>

            <div>

                <h1>QueerNews als Mobile-App</h1>
                <p>
                    Die QueerNews Webseite ist eine "Progressive Web App".
                    Wähle einfach in deinem Browser im Menu "Zu Startbildschirm hinzufügen" aus und du hast QueerNews als App auf deinem Smartphone installiert!
                    Wenn du weitere Hilfe brauchst, schau hier:
                    <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=de" target="_blank">Für Android</a>&nbsp;
                    <a href="https://support.appyourself.net/de/articles/1252130-ablegen-der-progressive-web-app-auf-dem-homescreen-unter-ios" target="_blank">Für IOS</a>
                </p>

            </div>

            <div>
                <h1>So funktioniert es</h1>
                <p>
                    Wie du vielleicht schon bemerkt hast, haben wir keine eigenen Artikel, sondern beziehen unsere Daten von externen Quellen.
                    Warum? Naja, es gibt viele verschiedene Kanäle, Nachrichtenseiten und Homepages.
                    Wir schaffen mit QueerNews die Möglichkeit, diese Informationen gebündelt und einheitlich abzurufen.
                    Außerdem benachrichtigen wir dich auch (z.b. auf Telegram, Discord oder DBNA), wenn es Neuigkeiten gibt.
                    Das alles realisieren wir mittels RSS-Feeds, die vom System in regelmäßigen Abständen abgerufen werden.
                    Die Feeds durchlaufen bestimmte Filter und werden an die "Services" in Echtzeit weitergegeben, welche dann automatisiert auf den jeweiligen Plattformen die neuen Artikel mit Originallink zur Quelle posten.
                </p>
            </div>

            <div>
                <h1>Disclaimer und rechtliche Hinweise</h1>
                <p>
                    Bei dem gesamten QueerNews Projekt handelt es sich um ein nicht-kommerzielles Hobbyprojekt.
                    Wir verdienen keinerlei Geld durch diese Webseite oder unsere Services.
                    Da wir redaktionelle Inhalte anderer Quellen einbinden und nutzen, sind die Inhalte auf kurze Texte (max. 200 Zeichen) begrenzt.
                    Außerdem sind die Originalnamen sowie eine Verlinkung zur Quelle angegeben.
                </p>
            </div>

            <div>
                <h1>Kontaktiere uns!</h1>
                <p>
                    Bei weiteren Fragen und/oder Problemen kannst du uns unter <a href="mailto:queernews@bluemedia.dev">queernews@bluemedia.dev</a>
                    eine E-Mail schreiben. Du kannst uns auch schreiben, wenn du einen guten Vorschlag zur verbesserung oder für eine neue Quelle hast.</p>
            </div>


        </div>

    </div>

</template>

<style>
#about{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#about-header{
    display: flex;
    padding: 50px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url("../assets/background.png");
    background-position: center;
    background-size: cover;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
}

#about-header h1, #about-header h2{
    text-shadow: 3px 3px 0 rgba(0,0,0,0.4);
    color: white;
}
#about-content > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
}
#about h1{
    font-size: 48px;
    margin-top: 0;
    padding: 10px;
}
#about-content p {
    font-size: 21px;
    max-width: 1000px;
    text-align: left;
}
#about img{
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    margin-right: 50px;
}

#about-content .about-card{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px 0 20px;
}

#about-content .about-card img{
    max-height: 80px;
    margin: 0;
    box-shadow: none;
    transition: transform ease-in-out 0.05s;
}

#about-content .about-card:hover{
    transform: scale(1.05);
}

#about-content .about-card svg{
    stroke: #1d2a3c!important;
    max-height: 80px;
}
#about-content .about-card svg g{
    stroke: currentColor;
}
#about-content .about-card .fa, #about-content .about-card .fab{
    font-size: 80px;
}
#about-content .about-card a{
    text-decoration: none;
    color: #1d2a3c;
    min-width: 150px;
}

#about-content .card-wrapper{
    display: flex;

}
@media only screen and (max-width: 920px) {
    #about-content > div{
        flex-direction: column;
    }
    #about img{
        margin: 0;
    }
    #about-content .card-wrapper{
        flex-direction: column;
    }
}
@media (prefers-color-scheme: dark) {
    #about-content .about-card a{
        color: white;
    }
}
</style>
