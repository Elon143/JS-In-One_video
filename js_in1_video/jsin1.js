// 1. ways to print in javascript
// console.log("Hello world");
// allert("me");
// document.write("this is document.write")



// 2. Javascript console API ;
// console.log("hello world ", 3 + 3, "Another log");
// console.warn("THis is warning");
// console.error("This is an error");

// // 3.JavaScript Variables

// what are variables? - containers to store data values

// var num = 3;
// var num2 = 4;
// console.log(num + num2);

// 4. Data types in Javascript 
// Numbers 
var num1 = 343;
var num2 = 34.44;

// String

var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    rabi: 34,
    raj: 89,
    harry: 99.992,
    aman: 45.4
};
// console.log(marks);

// Booleans

var a = true;
var b = false;
// console.log(a, b);


// var und = undefined
var und;
console.log(und);

var n = null;
// console.log(n);


/*
At a very high level, there are two types of data types in javascript
1. Primitive data types: undefined, null , numbers, string, boolean, symbol
2. Refrence data types: Arrays and objects 
*/

// 2.  Refrence data types : Array and objects 

var arr = [1, 2, "lora", 4, 5];
// console.log(arr)
// console.log(arr);

// Operators in Javascript
// Arithmetic operators

var a = 100;
var b = 10;
// console.log("The value of a+b is ", a + b);
// console.log("The value of a-b is ", a - b);
// console.log("The value of a*b is ", a * b);
// console.log("The value of a/b is ", a / b);

// Assignment operators = > most import;

var c = b;
// c += 2;       // c = c+2           hota hai
// c -= 2; // c = c-2        ye matlab hota hai
c *= 2;
// c /= 2;    c = c/2 hoga
// c += 2;

// console.log(c);


// Comparison Operators

var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);


// Logical operators
/* AND operator
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
*/

/* OR operator
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
*/
/* Logical NOT operator
 console.log(!false);
 console.log(!true);  // logigal NOT true  ko false, aur false ko true kar deta hai
 */

// function in javascript 
function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log('average of c1 and c2 is', c1, c2);

/*
// Conditionals in Javascript 

var age = 34;
// Single if statement 
if (age > 18) {
    // console.log('You can drink protein');
}

// if - else statement 
// if(age > 18){
//      console.log('you can drink wine');
// }
// else{
//    console.log('you cannot drink wine');
// }

age = 23;

if (age > 32) {
    console.log('you are not a kid');
} else if (age > 26) {
    console.log("Yes tum bacche nahi rahe");
} else if (age > 18) {
    console.log("Yes you are a teenager");
} else {
    console.log("Yes you are a man");
}
*/

// Loops in js **

var arr = [1, 3, 2, 5, 4, 2, 6];
// console.log(arr);
//  For Loop **
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;

//     }
//     console.log(arr[i]);
// }

/* forEach  loop**
arr.forEach(function(element) {
    console.log(element);
});
*/

// const ac = 0;
// ac++;
// ac = ac +1;

// while loop and do-while loop **

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do while loop ***

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


let myArr = ['computer', 'fan', 34, null, true];
// myArr.sort();
// Array Methods
// console.log(myArr.length);
// myArr.pop(); // pop reduce the element of arr
// myArr.push(); // push increase the element of arr
// myArr.shift() // shift reduce the first element of arr
// myArr.unshift("Harry");
// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);


// String Methods in javascript **

let myFirstString = "RAj Know how to score good marks, RAj";
// console.log(myFirstString.length);
// console.log(myFirstString.indexOf("how"));
// console.log(myFirstString.lastIndexOf("score"));

// console.log(myFirstString.slice(1, 4));
f = myFirstString.replace("RAj", "Rohan");
// f = f.replace("Rohan", "Arab");
// console.log(f);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getMinutes());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

// DOM Manipulation **

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].style.background = 'yellow';
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
// tn = document.getElementsByTagName('button');
// console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created Element";
// tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This  created a bold Replace";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); -----> removes an element


// Selecting using Query 
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);


// function clicked(){
//     console.log('The button was clicked');
// }

// window.onload = function(){
//     console.log('The document was loaded')
// }

// // Events in javascript
// firstContainer.addEventListener('click', function(){
//     document.querySelector('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Clicked On Container")
// })
// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse On Container")
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse Out of  Container")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked of  Container");
// })
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>  we have clicked </b>"
//     console.log("Mouse down when clicked of  Container");
// })


// Arrow Functions

// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired </b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// setTimeout(logKaro,2000);
// clr = setInterval(logKaro,5000);
// clr = setInterval(logKaro,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// javaScript local storage
// localStorage.setItem('name','Adam');
// localStorage
// localStorage.getItem('name');


// Json
obj = {name:"harry", length:1, a:{this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso);
parsed = JSON.parse(`{"name":"harry", "length":1,"a":{"this":"that"}}`)
console.log(parsed)

a = 34;
console.log(`this is my $(a)`);

