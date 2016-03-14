var express = require('express');
var app = express();
var path = require('path');
var useragent = require('express-useragent');
var sassMiddleware = require('node-sass-middleware');
var morgan = require('morgan');

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

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    hostname: req.hostname === 'localhost' ? 'localhost:' + port : req.hostname
  });
});

router.use(useragent.express());

router.get('/parser', function(req, res) {
  res.json({
    ip: req.ip,
    lang: req.acceptsLanguages()[0],
    os: req.useragent.os
  });
});

app.use('/', router);

app.listen(port);
