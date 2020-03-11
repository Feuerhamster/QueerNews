<template>

    <div id="about" class="responsive-content">

        <div>
            <img src="@/assets/logo.png"/>
            <div>
                <h1>Wir sind QueerNews</h1>
                <h2>Vertreten auf verschiedenen Plattformen<br/> bieten wir aktuelle News<br/> rund um die LGBTQ+ Community</h2>
            </div>
        </div>

        <div>
            <div>
                <h1>QueerNews im Internet</h1>
                <h2>Trete doch unserem <a>Telegram Channel</a> bei oder besuche unsere <a>Gruppe auf DBNA</a></h2>
            </div>
        </div>

        <div>
            <div>
                <h1>Wie es funktioniert</h1>
                <h2>Unsere Webseite und Dienste basieren auf Daten aus RSS-Feeds anderer Quellen.
                    Die Daten werden bei uns live verarbeitet und in unseren Gruppen (Telegram, DBNA) sowie der Webseite zur verfügung gestellt.
                </h2>
            </div>
        </div>

        <div>
            <div>
                <h1>Kontaktiere uns!</h1>
                <h2>Bei weiteren Fragen kannst du uns unter <a href="mailto:contact@queernews.ml">contact@queernews.ml</a> eine Email schreiben</h2>
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
#about img{
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
    margin-right: 50px;
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
