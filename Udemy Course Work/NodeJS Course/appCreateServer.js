const http = require('http');
// Below is a way to create a server with a request listener. This funcution will run when they recieve a request and tells it to respond.

// function rqListener(req, res) {

// }

// http.createServer(rqListener);







// This can also be done by an anonomus function:

// http.createServer(function(req, res) {

// });



// Yet another way to write it:
const server = http.createServer((req, res) => {
console.log(req);
// process.exit();  /*This will quit the process after the last request made by a particular function. Not something that you should do since you always want your server to listen for requests. Therefore, clients have access to your webpage. */
});

// Below: Putting in .listen() tells the newly formed server to 'listen' for incoming requests. The code will not execute until the server recieves a request.
server.listen(3000);
