var mongoose = require('mongoose');

var ItemsSchema = new mongoose.Schema({
  name: String,
   email: String,
    password: String,
  
});

module.exports = mongoose.model('user', ItemsSchema);