var express = require('express');
var app = express();

var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
//requiring path and fs modules
const path = require('path');
const fs = require('fs');

app.use(express.static('iDesign_Public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/iDesign_Views");
app.set("view options", { layout: false } );

app.get('/', function(req, res, next) {
    res.render('index', {pageTitle:'Home Page TITLE', myHeading: 'Welcome' , menuId:'home'});
});

app.get('/about', function(req, res, next) {
    res.render('about', {pageTitle:'About Page TITLE', myHeading: '...About US!' , menuId:'home'});
});

app.get('/service', function(req, res, next) {
    res.render('service', {pageTitle:'Service Page TITLE', myHeading: 'Our Services' , menuId:'home'});
});

app.get('/project', function(req, res, next) {
    res.render('project', {pageTitle:'Project Page TITLE', myHeading: 'Projects Page' , menuId:'home'});
});

app.get('/blog', function(req, res, next) {
    res.render('blog', {pageTitle:'Blog Page TITLE', myHeading: 'Awesome Blog' , menuId:'home'});
});

app.get('/product', function(req, res, next) {

    let imagesPaths = [];
    const directoryPath = path.join(__dirname, 'iDesign_Public/products');
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
            imagesPaths.push('products/'+file);
        });

        let myProducts = {
            data: imagesPaths
        };
    
        res.render('products', {pageTitle:'Products Page TITLE', myHeading: 'Awesome Products' , menuId:'home', myProducts});
    
    });

    });

app.get('/single', function(req, res, next) {
    res.render('single', {pageTitle:'Single Page TITLE', myHeading: 'A Single Page' , menuId:'home'});
});

app.post('/formSubmit', urlencodedParser, function(req, res, next) {

    let fullname = req.body.fullname;
    let email    = req.body.email;
    let subject  = req.body.subject;
    let message  = req.body.message;
    
    //res.send('Hello: '+ req.body.fullname+', Your email is: '+email);
    let user = {name: fullname};
    res.render('contact', {pageTitle:'Contact Page TITLE', myHeading: 'Contact US!' , menuId:'home',user});

});

app.get('/contact', function(req, res, next) {
    res.render('contact', {pageTitle:'Contact Page TITLE', myHeading: 'Contact US!' , menuId:'home', user:''});
});

app.listen(808);
console.log('listening on port 808...');