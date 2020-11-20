// Async Code & Promises:
// Using promise instead of callback will keep your code clean if you need to add multiple promises in need of a response. This is demonstrated in the        .then() method. This will execute once the promise is resolved or rejected.
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};


setTimeout (() => { /* This timer will be executed with a delay. Not like the 'Hello All'. Syncronous code executes right away. Async code executes on delay.*/
    console.log('Timer is done!'); 
    fetchData().then(text => {
        console.log(text);
        return fetchData(); /*This return converts in to a promise that will resolve upon completion of the first promise. So you have added another promise within the first. */
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000);





// Examples of Syncronous Code are below:
console.log('Hello All!');
console.log('Good Morning Sunshine!');




/* More examples:

const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
function getMovie() {
    //Ask user for Movie
    inquirer
        .prompt([
            {
                type: "input",
                message: "What movie would you like to see the info for?",
                name: "title"
            },
            {
                type: 'checkbox',
                name: 'choices',
                message: 'what fields would you like to save?',
                choices: ["imdbRating", "Rated", "Released", "Genre"]
            }
        ])
        .then(function (answers) {
            console.log(answers)
            //Hit OMDB for that movie
            const url = `http://www.omdbapi.com/?apikey=trilogy&t=${answers.title}`
            axios.get(url)
                .then(function (response) {
                    let data = `${answers.title}:  \n`;
                    answers.choices.forEach(choice => {
                        data += `\t ${choice}: ${response.data[choice]} \n`
                    })
                    // Write some info to a file
                    fs.appendFile('ratings.txt', data, err => {
                        askAgain();
                    })
                })
        });
}
function askAgain() {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Would you like to search again?',
        name: 'continue'
    }]).then(answers => {
        if (answers.continue) {
            getMovie();
        }
    })
}
getMovie();


Former AJAX:

const user = ""
$.ajax({
    url: `https://api.github.com/user/${user}/repos?per_page=100`,
    method: "get"
}
).then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(`Error 1: ${err}`)
})
async function example() {
    try{
        const data = await $.ajax({
            url: `https://api.github.com/user/${user}/repos?per_page=100`,
            method: "get"
        })
        console.log(data)
    } catch (err){
        console.log(`Error 2: ${err}`)
    }
}
example();


CLEANER WAY:

const user = ""
$.ajax({
    url: `https://api.github.com/user/${user}/repos?per_page=100`,
    method: "get"
}
).then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(`Error 1: ${err}`)
})
async function example() {
    try{
        const data = await $.ajax({
            url: `https://api.github.com/user/${user}/repos?per_page=100`,
            method: "get"
        })
        console.log(data)
    } catch (err){
        console.log(`Error 2: ${err}`)
    }
}
example();*/ 