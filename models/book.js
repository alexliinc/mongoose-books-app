// require
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SCHEMA
// -title
// -author
// -image (use a string for this)
// -releaseDate

var BookSchema = new Schema({
  title: String,
  // you should fill the rest of this in
  author: String,
  image: String,
  releaseDate: String
});

// book.js MODEL
var Book = mongoose.model('Book', BookSchema);

// export
module.exports = Book;
