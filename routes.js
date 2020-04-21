var express = require('express'),
    router = express.Router(),
    bookCtrl = require('./book-controller');
router.get('/get/html',bookCtrl.bookTable);
    router.get('/',bookCtrl.getIndex);
    router.get('/book/list',bookCtrl.getBooks);
    router.post('/book/add',bookCtrl.createBook);
    router.post('/book/update',bookCtrl.updateBook);
    router.post('/book/delete', bookCtrl.deleteBook);

  module.exports =router;

