var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    isbn: { type: String, unique: true},
    author: String,
    title: String,
    publisher: String,
    publisheryear: Number,
    genre: String,
    price: Number
});

module.exports = mongoose.model('Book', bookSchema);

  


