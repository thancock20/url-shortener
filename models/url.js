var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener');

autoIncrement.initialize(connection);

var URLSchema = new Schema({
  original_url: String
});

URLSchema.plugin(autoIncrement.plugin, 'Url');
module.exports = connection.model('Url', URLSchema);
