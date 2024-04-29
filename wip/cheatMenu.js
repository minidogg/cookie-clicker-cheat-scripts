var cheatMenu = {}
cheatMenu.getCookies = function(){Game.Prompt("<p>How many cookies?</p><div class='block'><input id='cookiebox' type='number'></div>",[["COOKIES","Game.Earn(Number(document.getElementById('cookiebox').value));Game.ClosePrompt();"]])};
cheatMenu.getFreeObject = function(){
    Game.Prompt("<h3>Object maker</h3><div class='block'><input placeholder='Object name' id='objectName'><input placeholder='Object amount' id='objectAmount' type='number'></div>",[["Give","if(Game.Objects[document.getElementById('objectName').value]){Game.Objects[document.getElementById('objectName').value].amount+=parseInt(document.getElementById('objectAmount').value)};Game.RefreshStore();Game.ClosePrompt();"]])
}
if(!cheatMenu.div){
cheatMenu.div = document.createElement("div");
document.getElementById("topBar").prepend(cheatMenu.div);
}else{
    cheatMEnu.div.innerHTML = ""
}
cheatMenu.div.innerHTML = "<button onclick='cheatMenu.getCookies()'>Get Cookies</button><button onclick='cheatMenu.getFreeObject()'>Get Objects</button>";
