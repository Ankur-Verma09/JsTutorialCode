// Ways to print in javascript
// console.log("Hello World");
alert("my 1st alert");
document.write("This is the document writing test");

// Console API
// console.log("Thi is an log example", 4 + 6, "Another log");
// console.warn("This is warning in console");
// console.error("This is error in consol");

// JavaScript variables -> Container to sy=tore datavalue
var number1 = 2;
var number2 = 5;
// console.log(number1 + number2);

// DataTypes in javascript
var num1 = 4;
var num2 = 22.58;
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects
var marks = {
  ravi: 58,
  rajesh: 55.8,
};

// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

var defultUnd;
var und = undefined;
// console.log(defultUnd);
// console.log(und);

var nullvar = null;
// console.log(nullvar)

/*
There are 2 types of datatypes in JavaScript
Priitive data types: undefined, null, boolean, number, string, symbol
Reference data types: Arrays, Objects
*/

var arr = [1, 2, 3, 4, 5];
var newArr = [1, 2, "Raju", 4, 5];

// Operators in JavaScript
// Arithmatic Operators
var a = 5;
var b = 7;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a / b is", a/b);
// console.log("The value of a * b is", a*b);

// Assignment Operators
var c = b;
c += b;
c -= 2; // c = c-2
// console.log(c);

// comparision operators
var x = 89;
var y = 82;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);

// Logical Operators
// Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical OR
// console.log(true || true);
// console.log(true || true);
// console.log(true || true);
// console.log(true || true);

// Logical Not
// console.log(!true);
// console.log(!false);

// Sunction in javaScript
// Dry = Do not repeat yourself
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(5, 7);
c2 = avg(6, 7);
// console.log(c1, c2)

// Conditionals in JavaSript
var age = 60;

// if(age >= 18){
//     console.log("You are adult")
// }

// if(age >= 18){
//     console.log("You are adult")
// }
// else{
//     console.log("You are a Kid")
// }
age = 26;
// if(age > 14){
//     console.log("You are adult")
// }
// else if(age>59){
//     console.log("YOu are retired now")
// }
// else if(age>25){
//     console.log("You are grown up now")
// }
// console.log('End of lader')

var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })


// const ac = 0;
// ac = ac++;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// for(var i = 0; i<arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

let myArr = ["fan", "camera", 85, null, true];
// Array methods
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Ankur");
// myArr.shift()
// myArr.unshift("85");
// console.log(myArr);
// const newLen =  myArr.unshift("ankur")
// console.log(newLen);

// String methods in JavaScript
let myString = "Ankur is a good boy Boy";
// console.log(myString.length);
// console.log(myString.indexOf("boy"));
// console.log(myString.lastIndexOf("Boy"));
// console.log(myString.slice(3,7));
// d = myString.replace("Ankur", "Lavi");
// e = myString.replace("boy", "or bad");
// console.log(e, d, myString);

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getMinutes());


// DOM mapulation
let elem = document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[1].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName("div");
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This isa created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This isa created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
tn[0].removeChild(createdElement2);

// Selecting using query
// sel = document.querySelector(".container")
// console.log(sel);
// sel = document.querySelectorAll(".container")
// console.log(sel);
// sel = document.querySelector(".text-success")
// console.log(sel);
// sel = document.querySelectorAll(".text-success")
// console.log(sel);

// Events in JavaScrip
// function clicked(){
//   alert("btn was clicked")
// }

// window.onload = function(){
// console.log("Document was loaded")
// }

// firstContainer.addEventListener("click", function(){
//   document.querySelectorAll('.container')[1].innerHTML= "<b> We have Clicked </b>"
//   console.log("Clicked on container")
// });

// firstContainer.addEventListener("click", function(){
//   console.log("Clicked on container")
// });

// firstContainer.addEventListener("mouseover", function(){
//   console.log("Mouse on container")
// });

// firstContainer.addEventListener("mouseout", function(){
//   console.log("mouse out of container")
// });

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener("mouseup", function(){
//   document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("mouse up when clicked on container")
// });

// firstContainer.addEventListener("mousedown", function(){
//   document.querySelectorAll('.container')[1].innerHTML= "<b> We have Clicked </b>"
//   console.log("mouse down when clicked on container")
// });

// setTimeout and setInterval
// Arrow function
// function sum(a,b){
//   return a+b;
// }

sum=(a,b)=>{
  return a+b;
}

logkaro=(a,b)=>{
  document.querySelectorAll('.container')[1].innerHTML= "<b> Set interval fired </b>"
  console.log("I am configured for 5 sec delay")
}
// setTimeout -  use clearInterval(clr)/clearTimeout(clr) to cnacel the setInterval/setTimeout
// clr = setTimeout(logkaro, 5000);
// clr = setInterval(logkaro, 5000);


// JavaScript localStorage
// localStorage.setItem('name', 'ankur')
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.clear();

// Json
// obj = {name: "ankur", hight: 5.8, a: {this: 'tha"t'}};
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// parsed= JSON.parse('{"name":"ankur","hight":5.8,"a":{"this":"tha\\"t"}}')
// console.log(parsed);

// Tamplet literals - Backticks
a= 34;
console.log(`This is my ${a}`)
