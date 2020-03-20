<template>

    <div id="about" class="responsive-content">

        <div>
            <img src="@/assets/logo.png" alt="logo"/>
            <div>
                <h1>Das ist QueerNews</h1>
                <h2>Vertreten auf verschiedenen Plattformen bieten wir aktuelle News<br/> aus bekannten Quellen rund um die LGBTQ+ Community</h2>
            </div>
        </div>

        <div>
            <div>
                <h1>QueerNews im Internet</h1>
                <div class="card-wrapper">
                    <div class="about-card">
                        <a :href="$store.state.config.social.telegram">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2000px-Telegram_logo.svg.png" alt="Telegram" />
                            <h2>Telegram Channel</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.social.dbna">
                            <img src="https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p960x960/35362296_10156510970524559_7208143342570307584_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=CojSvPQ5JHcAX_Pi2Gn&_nc_ht=scontent-frt3-2.xx&_nc_tp=6&oh=803d94d9faaa1c132d57c45dab7d3437&oe=5E994EEA" alt="DBNA" />
                            <h2>DBNA Gruppe</h2>
                        </a>
                    </div>
                    <div class="about-card">
                        <a :href="$store.state.config.endpoint + 'rss'">
                            <img src="@/assets/rss_icon.png" alt="RSS" />
                            <h2>RSS Feed</h2>
                        </a>
                    </div>

                </div>

            </div>
        </div>

        <div>
            <div>
                <h1>QueerNews & LGBT-Treffpunkt auf Discord</h1>
                <div class="row">
                    <img src="@/assets/logo.png" style="max-height: 120px;" alt="logo" />
                    +
                    <img src="@/assets/discord.png" style="max-height: 80px; box-shadow: none" alt="discord" />
                    +
                    <img src="https://cdn.discordapp.com/icons/674184363293933570/5e9dbc26b48bf73e2f819a7734351346.webp" style="max-height: 120px;" alt="LGBT-Treffpunkt" />

                </div>
                <h2><a :href="$store.state.config.social">LGBT-Treffpunkt Beitreten</a></h2>
                <p>
                    <strong>QueerNews</strong> und der <strong>LGBT-Treffpunkt [DE]</strong>  Discord Server sind Partner!<br/>
                    Deshalb ist unsere offizielle Discord-Implementierung auf diesem Server.<br/>
                    Das bedeutet, dass du dort natürlich auch von uns über aktuelle News benachrichtigt wirst.<br/>
                    Tritt doch der tollen Community bei und treffe andere queere Menschen.<br/>
                </p>
            </div>
        </div>

        <div>
            <div>
                <h1>So funktioniert es</h1>
                <p>
                    Wie du vielleicht schon bemerkt hast, haben wir keine eigenen Artikel, sondern beziehen unsere Daten von externen Quellen.<br/>
                    Warum? Naja, es gibt viele verschiedene Kanäle, Nachrichtenseiten und Homepages.
                    Wir schaffen mit QueerNews die Möglichkeit, diese Informationen gebündelt und einheitlich abzurufen.<br/>
                    Außerdem benachrichtigen wir dich auch (z.b. auf Telegram, Discord oder DBNA), wenn es Neuigkeiten gibt.<br/>
                    Das alles realisieren wir mittels RSS-Feeds, die vom System in regelmäßigen Abständen abgerufen werden.<br/>
                    Die Feeds werden an die "Services" in Echtzeit weitergegeben, welche dann automatisiert auf den jeweiligen Plattformen die neuen Artikel mit Originallink zur Quelle posten.<br/>
                </p>
            </div>
        </div>

        <div>
            <div>
                <h1>Disclaimer und rechtliche Hinweise</h1>
                <p>
                    Bei dem gesamten QueerNews Projekt handelt es sich um ein nicht-kommerzielles Hobbyprojekt.<br/>
                    Wir verdienen keinerlei Geld durch diese Webseite oder unsere Services.<br/>
                    Da wir redaktionelle Inhalte anderer Quellen einbinden und nutzen, sind die Inhalte auf kurze Texte (max. 100 Zeichen) begrenzt.<br/>
                    Außerdem sind die Originalnamen sowie eine Verlinkung zur Quelle angegeben.
                </p>
            </div>
        </div>

        <div>
            <div>
                <h1>Kontaktiere uns!</h1>
                <p>
                    Bei weiteren Fragen und/oder Problemen kannst du uns unter <a href="mailto:contact@queernews.ml">contact@queernews.ml</a>
                    eine E-Mail schreiben.</p>
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
#about > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 100px;
}
#about h1{
    font-size: 48px;
    margin-top: 0px;
    padding: 10px;
}
#about p {
    font-size: 21px;
    font-weight: 500;
}
#about .row{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
#about .row > img{
    margin: 0px 20px 0px 20px;
}
#about img{
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    margin-right: 50px;
}

#about .about-card{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 20px 0px 20px;
}

#about .about-card img{
    max-height: 120px;
    margin: 0px;
    box-shadow: none;
}
#about .card-wrapper{
    display: flex;

}
@media only screen and (max-width: 920px) {
    #about > div{
        flex-direction: column;
    }
    #about img{
        margin: 0px;
    }
}
</style>
