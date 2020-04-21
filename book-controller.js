
var Book = require('./models/book');


exports.getIndex= function(req, res, next) {
  
  res.render('book', { title: 'Express' });

};


exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);
    newbook.save(function (err, book) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.json(book); 
});
};

exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
   
    res.json(books);
   

  }); 
};

exports.getBook = function(req, res) {
  Book.findOne({_id: req.params.id}, function (err, book) {
    if (err) {
      res.status(400).json(err);
    } 

    res.json(book);
  }); 
};

exports.updateBook = function(req, res) {
  Book.findOneAndUpdate({selectedIndex: req.params.selectedIndex}, req.body, {new: true},function (err, book) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(book);
    console.log("updated")
  }); 
};


exports.deleteBook = function(req, res) {
       var entreeArray = req.body.entree;
  Book.findByIdAndRemove(entreeArray, function (err, book) {

    if (err) {
      res.status(400).json(err);
    } 
      for (i = entreeArray.length - 1 ; i >= 0; i--) {
        var selectedIndex = entreeArray[i];
        delete book.bookSchema[selectedIndex];
       Book.getBooks();

      }
   // res.json(book);
  }); 
};

 exports.bookTable = function(req, res) {

        res.send("<h3> LIST OF BOOKS  </h3> ");


    };
//this
  
function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};
 function read() {
  var html = fs.readFileSync('book.html', 'utf8');
  return html.toString();
}

// // book list
// router.post("/get/html", function(req, res) {
//     // TODO

//     // real data
//    var bookList = Book.list()
//     res.json(bookList)

//    // mock data
//    res.json("mock json data")



   
//     res.json({
//         books: [
//             {
//                 id: booklist.id
//                 isbn': newBook.isbn, 
//                 'author': newBook.author,'title': newBook.title, 'publisher': newBook.publisher, 'publishedyear' : newBook.publishedyear,'genre': newBook.sec_genre,'price': newBook.price}
//             }
//         ]
//     })
// })