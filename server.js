// Haein
var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs'), //not sure if we need this
    logger = require("morgan"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    expAutoSan = require('express-autosanitizer');//validation

var app = express();
//var server = http.createServer(router);
var port = 3000;
var bookCtrl = require('./book-controller');

// helmet 
app.use(express.static(path.resolve(__dirname,'views'))); // something that we provide to user
// router.use(express.urlencoded({extended: true}));// thing that i did for additon
// router.use(express.json()); // thing that i did for additon //this causes the default setting  quest*****
//router.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(expAutoSan.allUnsafe);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.use(express.static(path.resolve(__dirname,'views'))); // something that we provide to user


mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});


mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

// server.listen(process.env.PORT || 3000, process.env.IP, function(){
// var addr = server.address();
// console.log("Server is listening at", addr.address + ":" + addr.port)
// });

app.listen(port,function(err){
    console.log("listening on port :" +port)
});
