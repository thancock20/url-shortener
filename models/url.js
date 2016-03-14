var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var URLSchema = new Schema({
  original_url: String
});

module.exports = mongoose.model('Url', URLSchema);
