// Express.js

/*Installing: Use npm install --save express   */

const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);

/*Adding Middleware and How it Works:    */