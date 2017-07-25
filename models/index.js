var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// module.exports.Book = require("./book.js").Book;
// module.exports.Character = require("./book.js").Character;

module.exports.Book = require("./book.js")
module.exports.Author = require("./author.js");
