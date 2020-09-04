// // One line comments.
// /*
// Multi
// line
// comments*/ 

// // Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// let greeting = 'Hello';
// console.log(greeting);
// console.log(["Esther", "Ruth", "Abigail", "Hannah"]);
// console.log([1,2,3,4,5,6,7]);
// console.log({a:1, b:2, })
// console.table({a:1, b:2, });
// console.error('This is some error');
// console.clear();
// console.warn('This is a Warning');
// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');
// console.clear();

// // Variables:  let, const
// // Variable Names can have: letters, numbers, _, $
// // They cannot START with a number.

// /* Data Types: "Primitive" and "Reference".

// Primitive- stored directly in the location that the variable accesses. Stored on the Stack. Accessed by actual value.
//         Include:
//            String, Number, Boolean, Null, Undefined, Symbols(ES6)



// Reference- Accessed by reference... Objects are stored on the heap... A pointer to a location in memory.
//         Include:
//             Arrays, Object Literals, Functions, Dates, Anything Else....
//             */

//             // PRIMITIVE TYPES

//             // String
const name = "Alice";
console.log(typeof name);

// // Number
const age = 32
console.log(typeof age);

// // Boolean
const isPregnant = false;
console.log(typeof isPregnant);

// // Null
const hasToyota = null;
console.log(typeof hasToyota);

// // Undefined
let inCarAccident;
console.log(typeof inCarAccident);

// // Symbols (ES6)
const sym = Symbol();
console.log(typeof sym);


// // REFERENCE TYPES - ALL will come back as Objects


// // Arrays
const hobbies = ['music', 'phone games', 'doing research'];
console.log(typeof hobbies);

// // Object Literals
const homeTown = {
    town: 'Show Low',
    state: 'AZ'
}
console.log(typeof homeTown);

// // Dates
const today = new Date();
console.log(today);
console.log(typeof today);

// // TYPE CONVERSION:

let val;

// // Number-> String
val = String(777);
val = String(7 * 7);

// // Boolean-> String
val = String(true);

// // Date-> String
val = String(new Date());

// // Array-> String
val = String(['Esther', 'Ruth', 'Abigail', 'Hannah'])

// // toString() Method
val = (7).toString();

// // Boolean-> String
val = (true).toString();


// // Strings-> Numbers
val = Number("7");

// // Boolean-> Number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = parseInt('700');
val = parseFloat('700.3');
// Use parseFloat for decimals

// // Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));


// // TYPE COERCION: Type changes that Javascript will do for us.

const val1 = String(7);
const val2 = 7;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

console.clear();


// Numbers & The Math Object
const numA = 100;
const num2 = 50;
let result;

// Simple math with numbers
result = numA + num2;
result = numA * num2;
result = numA - num2;
result = numA / num2;
result = numA % num2

// Math Object

result = Math.PI;
result = Math.E;
result = Math.round(2.8);

// Method to round up
result = Math.ceil(2.4);

// Method to round down
result = Math.floor(2.8);

// Method to square something
result = Math.sqrt(64);

// Method to get absolute number
result = Math.abs(-7);

// Method for power of / exponential
result = Math.pow(8, 2);

// Method for min and max
result = Math.min(2, 7, 8);
result = Math.max(7, 3, 10);

// Method for Random
result = Math.random();
result = Math.random() * 20 + 1;
result = Math.floor(Math.random() * 20 + 1);

console.log(result);

console.clear();


// String Methods and Concatenation:

const firstName = 'Martin';
const lastName = 'Richardson';
const ageMR = 44
const str = 'Peter is a nice name as well'

let person;
person = firstName + lastName;

// Concatenation 
person = firstName + ' ' + lastName;


// Append------ The space comes form the extra space in the last of Martin's ''.
person = 'Martin ';
person += 'Richardson';

person = "Hey, my name is " + firstName + ' and I am ' + ageMR;

// Escaping putting in a back slash to connect a sentence. Although using " " is much easier.
person = 'That\'s a great idea! Coffee sounds good. Can\'t wait!';

// Properties available with Strings:
// Length

person = firstName.length;

// Concat
person = firstName.concat(' ', lastName);

// Change Letter Case
person = firstName.toUpperCase();
person = firstName.toLocaleLowerCase();

// Strings can be treated like Arrays, meaning you can zero in on a specific character:
person = firstName[0];

// IndexOf Method
person = lastName.indexOf('R');
// To go the other way you do:
person = lastName.lastIndexOf('r');

// charAt()---- you put in the number index and console returns the character holding that spot.
person = firstName.charAt('2');

// Use this formula to always get the last character of a string....
person = firstName.charAt(firstName.length - 1);

// Use substring() to pull a string out that is within a string....
person = firstName.substring(0, 4);

// slice.... This is most often used to pull things out of arrays but can be used for strings as well. This can give you charaters in a backwards formation as well.
person = firstName.slice(0, 4);
// Backwards...
person = firstName.slice(-3);

// split()... This can split a string in to arrays based of separators..
person = str.split(' ');

// replace()... this will replace individual elements in an array. First in the '' in the () you put what elements needs to be replaced; then in the second put what the new value is.
person = str.replace('Peter', 'Keanu');

// includes()... Thiss gives a true or false value depending on what is in the string.
person = str.includes('Peter');

console.log(person);
console.clear();

// Template Literals... Are used to make Javascript code more readable. 

const name1 = 'Amanda';
const age1 = 34;
const job = 'Preschool Teacher';
const city = 'Show Low';

let html;

// This can be used for shorthand of functions and if statements: Examples are on lines below and 28, 29. Colon in this instance means "else".



function hello() {

    return 'Bon Jour';

}



// Without Template Strings (es5) Way

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>' + job + '</li><li>' + city + '</li></ul>';



// Below is an organized way of doing this.



html = '<ul>' +

    '<li>Name: ' + name + '</li>' +

    '<li>Age: ' + age + '</li>'

'<li>Job: ' + job + '</li>'

'<li>City: ' + city + '</li>'

'</ul>';

// With Template Strings

html = `

<ul>

    <li>Name: ${name}</li>

    <li>Age: ${age}</li>

    <li>Job: ${job}</li>

    <li>City: ${city}</li>

    <li>${2 + 2}</li>

    <li>${hello()}</li>

    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>

</ul>`;



document.body.innerHTML = html;





// Arrays and Array Methods:

const num1 = [33, 77, 10, 07, 03];

const num3 = new Array(1, 2, 3, 17, 27);

const fruit = ['Apples', 'Strawberries', 'Pears', 'Mangos'];

const mixed = [37, 'Bon Jour', true, undefined, null, { a: 1, b: 1 }, new Date()];



let arrLess;



// Get the array length:

arrLess = num1.length;



// Check if is array: comes back true or false.

arrLess = Array.isArray(num1);



// Get a single value in an array:

arrLess = num1[3];

arrLess = num1[0];



// Insert something in to the array:

num1[2] = 100;



// Find index of a value:

arrLess = num1.indexOf(07);



// Mutating Arrays:

// Add on to end:

num1.push(770);



// Add on to front:

num1.unshift(127);



// Take off from end:

num1.pop();



// Take off from front: 

num1.shift();



// Splice values from anywhere in the array:

num1.splice(1, 1);



// Reverse the Array:

num1.reverse();



// Concatinate Arrays:

num1.concat(num3);



// Sorting Arrays:

arrLess = fruit.sort();

// arrLess = num.sort();

// The above is sorting numbers. When this happens the console log will only put the first digits in counting order. So below is the way to re-adjust to make console log to read and sort the whole number. This is called "Compare Function":

// arrLess.sort(function(x, y){

//     return x - y;

// });

// Reverse sort:

// arrLess.sort(function(x , y){

//     return y - x;

// });



// Find

function under50(num3) {

    return

}






console.log(num1);

console.log(arrLess);

console.clear();




























































