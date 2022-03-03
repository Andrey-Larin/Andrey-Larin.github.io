var password = 5312;
var one;

window.onload = function() {
    var returnOne = JSON.parse(localStorage.getItem("Von"));
    var returnTo = JSON.parse(localStorage.getItem("To"));
    var returnFri = JSON.parse(localStorage.getItem("Fri"));
    var returnFore = JSON.parse(localStorage.getItem("Fore"));
    if (returnOne == 1 && returnTo == 1 && returnFri == 1 && returnFore == 1) {
        document.location.href = "/windows.html";
        
    }
 };

function oneMember() {
    var one = 1;

    var serialOne = JSON.stringify(one); //сериализуем его в строчку
    
    localStorage.setItem("Von", serialOne); //запишем его в хранилище по ключу "myKey"
}

function toMember() {
    var to = 1;

    var serialTo = JSON.stringify(to); //сериализуем его в строчку
    
    localStorage.setItem("To", serialTo); //запишем его в хранилище по ключу "myKey"
}


function friMember() {
    var fri = 1;

    var serialFri = JSON.stringify(fri); //сериализуем его в строчку
    
    localStorage.setItem("Fri", serialFri); //запишем его в хранилище по ключу "myKey"
}


function foreMember() {
    var fore = 1;

    var serialFore = JSON.stringify(fore); //сериализуем его в строчку
    
    localStorage.setItem("Fore", serialFore); //запишем его в хранилище по ключу "myKey"
}
