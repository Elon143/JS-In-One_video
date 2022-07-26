console.log('tut3');
// variable in JS
// var, let,const

// var name = `ha'ry`;
var name = `hary`;
var channel;
var marks = 334;
marks = 0;
channel = 'Avengers';
console.log(name, channel, marks);

// Rules for creating javascript variables

/*
1. cannot start with numbers
2. can start with letter, numbers, _ or $
3. Are case sensitive
*/

var city = 'Delhi';
console.log(city);

const ownerName = 'Tony Stark';
// ownerName = 'Thor'; // we can not change this (error) const is unchangeble.
console.log(ownerName);
// const fruit = 'money';
// console.log(fruit);

{
    let city = 'Rampur';
    // city = 'Kolkata'
    console.log(city);
}

console.log(city);


const arr1 = [23, 21, 64, 2, 3];
// arr1 = [23, 34, 23, 42]         ye nahi kar sakte
arr1.push(34);
console.log(arr1);


/* MOst comman programming case types

1. camelCase
2.kebab-case
3. snake_case
4. PascalCase

*/

// document.getElementById()