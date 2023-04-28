setInterval(function(){
    if(Game.Objects.Cursor.price <= Game.cookies && Game.Objects.Cursor.price <= 31){
        Game.Objects.Cursor.buy()
    }else if(Game.Objects.Grandma.price <= Game.cookies){
        Game.Objects.Grandma.buy(1)
    }
    document.getElementById("bigCookie").click()
},1)
