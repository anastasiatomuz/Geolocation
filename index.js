console.log("I will create a server using Express module");

const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));


app.use(express.static('public'));
//this serves HTML  web pages
//this helps serve the web page stored in this folder at localhost:3000