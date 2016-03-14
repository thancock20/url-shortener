var express = require('express');
var app = express();
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var morgan = require('morgan');
var mongoose = require('mongoose');
var Url = require('./models/url');
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

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    hostname: req.hostname === 'localhost' ? 'localhost:' + port : req.hostname
  });
});

router.get('/new/*', function(req, res) {
  var original_url = (req.originalUrl).replace('/new/', '');
  if (original_url.search(/^https*:\/\/.*\..*$/) === -1) {
    res.json({
      error: 'invalid URL'
    });
  } else {
    var url = new Url();
    url.original_url = original_url;
    url.save(function(err) {
      if(err) res.send(err);
      var hostname = req.hostname === 'localhost' ? 'localhost:' + port : req.hostname;
      res.json({
        original_url: original_url,
        short_url: hostname + '/' + url.id
      });
    });
  }
});

router.get('/:url_id', function(req, res) {
  Url.findById(req.params.url_id, function(err, url) {
    if (err)
      res.send(err);
    res.redirect(url.original_url);
  });
});

app.use('/', router);

app.listen(port);
console.log("Node.js is listening on port " + port + "...");
