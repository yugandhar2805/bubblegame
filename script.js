var timer = 60;
var score = 0;
var hitrn =0 ;
function makeBubble()
{
    var clutter="";
for(var i=0; i<=200; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`; 
    }
document.querySelector(".pannel-bottom").innerHTML = clutter;
}
function runTimer(){
    var timerval =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer-val").textContent = timer;
        }
        else{
            clearInterval(timerval);
            document.querySelector(".pannel-bottom").innerHTML =`<h1>GAME OVER </h1>`;
        }
    },1000);
}
function newHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ;
}
function gameScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector(".pannel-bottom").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent)
    if(clickedNum == hitrn){
        gameScore();
        makeBubble();
        newHit();
    }
});
makeBubble();
runTimer();
newHit();