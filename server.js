var express = require('express');
var app = express();
var router = require('./routes/index');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener');

var port = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'compressed',
  indentedSyntax: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/', router);

app.listen(port);
console.log("Node.js is listening on port " + port + "...");
