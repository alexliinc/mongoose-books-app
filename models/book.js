var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
Author = require('./author');

var characterSchema = new Schema({
  name: String
});

var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String,
  characters: [characterSchema]
});


var Book = mongoose.model('Book', BookSchema);
var Character = mongoose.model('Character', characterSchema);


// module.exports.Book = Book;
// module.exports.Character = Character;

module.exports = Book;
