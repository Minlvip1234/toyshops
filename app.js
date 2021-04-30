const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const { parse } = require('path');
var hbs = require('hbs')
var publicDir = require('path').join(__dirname, '/public');

app.use(express.static(publicDir));
app.set('views', './views');
app.set('view engine','hbs')
app.use(bodyParser.urlencoded({ extended: false }));



const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log('Running at port 5000')