// Spread Operator:

// const hobbies = ['Sports', 'Cooking'];

// const copiedArray = hobbies.slice(1);
//  OR another method below puts the exact original array inside of the new array. This is called a nested array. Not the best practice but it's available:

// const copiedArray = [hobbies]; 

// Instead use the the spread operator which is "...", this will take the after array or object and pull the elements or properities out of them and attach them to the new. For example, if I did a new array consistant of additional hobbies: ('Singing', 'Painting', hobbies) it would read in the console "Array (2)". The individual properties of the array would not be visible at the onset. But by adding the   "..." spread operator infront of the hobbies variable array then it reads: 'Singing','Painting', 'Sports', 'Cooking' as the new array.

// const copiedArray = ['Singing', 'Painting', ...hobbies]; 
// console.log(copiedArray);

// It can also; Pass elements of an array as arguments to a function: but it will not add an additional argument. 
// function addThreeNumbers(x, y, z) {
//     console.log(x+y+z)
// }
// let args = [0, 1, 2];
// addThreeNumbers(...args);

// Spread will concatenate arrays:
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// arr1.concat(arr2);     This was the older way of doing it.
// arr1 = [...arr1, ...arr2];
// console.log(arr1);

// Doing it the above way allows you to add things more easily. Example of addition below:
// arr1 = [...arr1, "Good Morning Sunshine!", ...arr2];
// console.log(arr1);


/*Rest Operator:
The Rest Operator is literally the same as the Spread Operator. What setss them apart is HOW you use it and WHAT it is used for. It collects multiple elements together and condenses them into a single array. Whereas, the spread operator spreads out elements.
For example, if I have a need for many arguments that need to pass through a function rather than write a function for each argument I can use the "..." as the rest operator. It will collect and run through each argument as instructed and execute. Example below will help: */

function multiply(multiplier, ...theArgs) { /*This line: The parameters of this function is use to the multiplier with theArgs. Multiplier being the first number in the array and every number after that as an argument. You can pass through as many as you want.*/ 
return theArgs.map(function(element) { /*.map() will create a new array with results of the passed function*/
    return multiplier * element;
})
}
let arr = multiply(2, 1, 2, 3);
console.log(arr);

// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1, 2, 3, 4));

