// 4 pillars of DOM
// 1. Selection of Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Evengt Listener


// var a = document.querySelector("h1");
// console.log(a);

// a.innerHTML = "DOM changed"

// a.style.color = "red"
// a.style.backgroundColor = "black"

// a.addEventListener("click", function(){
//     // alert("event added")
//     // console.log("hey")
//     a.innerHTML = "Why do you want to change me";
//     a.style.color = "green";
//     a.style.backgroundColor = "yellow";
// })

var flag = 0;

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    if(flag == 0){
    bulb.computedStyleMap.backgroundColor ="yellow"
    console.log("Bulb is on now")
    flag = 1;
    } else{
        bulb.computedStyleMap.backgroundColor ="transparent"
        console.log("Bulb is off now")
        flag = 0;
    }
})

var h = document.querySelectorAll("h1");
// console.log(h)
h.forEach(function(e){
console.log(e)
})

