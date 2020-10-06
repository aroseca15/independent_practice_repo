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