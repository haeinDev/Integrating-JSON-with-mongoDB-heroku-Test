var express = require('express'),
    router = express.Router(),
    bookCtrl = require('./book-controller');

    router.get('/',bookCtrl.getIndex);
    router.get('/book/list',bookCtrl.getBooks);
    router.post('/book/add',bookCtrl.createBook);
    router.post('/book/update',bookCtrl.updateBook);
    router.post('/book/delete', bookCtrl.deleteBook);
router.get('/book/html',bookCtrl.bookTable);
  module.exports =router;

