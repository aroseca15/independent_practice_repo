// Desructuring:

// Object:

const person = {
    name: 'Amanda',
    age: 34,
    greet(){
        console.log("Hi, I'm" + this.name);
    }
};
/* Older Way of Doing it:*/
// const printName = (personData) => {
//     console.log(personData.name);
// }

// printName(person);


const printName = ({name}) => { /*The syntax is({Property Needed})   */
    // console.log(name);
}

printName(person);
/*The above way will automatically drop the other properties of that object and only returns what is specified.*/

const {name, age} = person; /*This will extract the properties specified and use them as variables. Normally, { } on the left side are incorrect, but this is not the case for destructuring.*/
// console.log(name, age);

// Arrays:

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); /*They will NOT appear in the console in brackets as they will no longer be an array. They are destructured to be two separate values. Also, array items are pulled out based on their position rather than a property name.*/