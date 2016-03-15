var express = require('express');
var Url = require('../models/url');

var router = express.Router();

var port = process.env.PORT || 8080;

router.get('/', function(req, res) {
  res.render('index', {
    hostname: req.hostname === 'localhost' ? 'http://localhost:' + port : req.protocol + '://' + req.hostname
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
      var hostname = req.hostname === 'localhost' ? 'http://localhost:' + port : req.protocol + '://' + req.hostname;
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
    if (url)
      res.redirect(url.original_url);
  });
});

module.exports = router;
