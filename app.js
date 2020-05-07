var express = require('express');


var app = express();

var todoController = require('./controllers/todoController.js');

app.set('view engine', 'ejs');


app.use('/assets', express.static('./public/assets'));

todoController(app);


console.log('server is listening on port 3000');
app.listen('3000');