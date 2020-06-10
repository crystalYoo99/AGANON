var express = require('express');
var app = express();
var router = require('./router.js');
var booksRouter = require('./books.js');

app.use(express.json());
app.use(express.static('public'));
app.use('/router', router);
app.use('/books', booksRouter);

app.listen(3006, function(){
    console.log('3006 port is running now!');
});

