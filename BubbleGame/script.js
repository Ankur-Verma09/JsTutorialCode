var timer = 60;
var scoreval = 0;
var  hitrn= 0;

function makeBubble(){
    var clutter = "";

for(var i = 1; i <= 238; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML =  clutter;
}


function runTimer(){
    var timerInt = setInterval(function(){  
        if(timer>0){
            timer--;
        document.querySelector("#timerValue").textContent = timer;
    }
    else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1> Game Over. Your score is ${scoreval} </h1>`;
    }
    }, 1000); 
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    scoreval++;
    document.querySelector("#scoreval").textContent = scoreval;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();

