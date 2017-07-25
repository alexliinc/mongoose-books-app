var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

//BOOKS EXPORT && IMPORTED
module.exports.Book = require("./book.js");

//AUTHOR EXPORT && IMPORTED
module.exports.Author = require("./author.js");
