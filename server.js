var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.listen(3000);
console.log('Server is running on port 3000...');