<template>

    <div id="about" class="responsive-content">

        <div>
            <img src="@/assets/logo.png"/>
            <div>
                <h1>Wir sind QueerNews</h1>
                <h2>Vertreten auf verschiedenen Plattformen<br/> bieten wir aktuelle News<br/> rund um die LGBTQ+ Community</h2>
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
</style>
