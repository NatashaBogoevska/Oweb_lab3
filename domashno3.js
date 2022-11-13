var zhelka;
var zajak;
var momentalnaPozicijaZ=0;
var momentalnaPozicijaR=1;
var pobednikZhelka;
var pobednikZajak;

function pomestiZhelka()
{
    while(momentalnaPozicijaZ!=70)
    {
    var i=Math.floor(1+Math.random()*10);

    if(i<=5){
        momentalnaPozicijaZ=momentalnaPozicijaZ+3;
    }
    if(i>5 && i<=7){
        momentalnaPozicijaZ=momentalnaPozicijaZ-6;
    }
    if(i>=8){
        momentalnaPozicijaZ=momentalnaPozicijaZ+1;
    }
    }
    momentalnaPozicijaZ=pobednikZhelka;
    if(pobednikZhelka>=10){
    alert("Pobedi zhelkata!");
    }

}
function pomestiZajak()
{
    while(momentalnaPozicijaR!=70)
    {
    var j=Math.floor(1+Math.random()*10);

    if(i<=2){
        momentalnaPozicijaR=momentalnaPozicijaR;
    }
    if(i>2 && i<=4){
        momentalnaPozicijaR=momentalnaPozicijaR+9;
    }
    if(i==5){
        momentalnaPozicijaR=momentalnaPozicijaR-12;
    }
    if(i>5 && i<=8){
        momentalnaPozicijaR=momentalnaPozicijaR+1;
    }
    if(i>8 && i<=10){
        momentalnaPozicijaR=momentalnaPozicijaR-2;
    }
}
    momentalnaPozicijaR=pobednikZajak;
    if(pobednikZajak>=10){
    alert("Pobedi zajakot!");
    }
}
function pateka(){
    zhelka=document.getElementById("zhelka");
    zajak=document.getElementById("zajak");
    zhelka=pomestiZhelka()+"%";
    zajak=pomestiZajak()+"%";
}
function startRace()
{
    setInterval(pateka,1000);
}

window.addEventListener("load",start,false);

function start()
{
    var button=document.getElementById("startR");
    button.addEventListener("click",startRace,false);
}
clearInterval();
