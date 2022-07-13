
//npm install ejs 
//npm install ejs -g 
//npm install ejs -g --save

var express = require('express');
var app = express();

app.use(express.static('EJS_Public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/EJS_Views");
app.set("view options", { layout: false } );


/* GET home page. */
app.get('/', function(req, res, next) {
    res.render('19_index', {page:'Home', menuId:'home'});
  });

app.listen(3002);
console.log('listening on port 3002...');