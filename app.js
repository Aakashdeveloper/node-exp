var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
//specific folder
//app.set('views', __dirname + '/views');

//for adding cosntsnt or some other words

app.locals.pagetitle = "Awesome website";

//using via route method
app.get('/', routes.index);
app.get('/about', routes.about);


//using directly in app.js
/*app.get('/', function(req, res){
  res.render('default', {
    title: 'HOME',
    classname: 'home',
    users :["a", "b", "c"]
      
    });
});

app.get('/about', function(req, res){
  res.render('default', {
    title: 'About Us',
    classname: 'about'
    });
 });*/
//app.get('/who/:name?', function(req, res){
 // var name  =  req.params.name; 
 // res.send('Aakash'+ name);
//});
//app.get('/who/:name?/:title?', function(req, res){
 // var title  =  req.params.title; 
//var name  =  req.params.name; 
//res.send('Aakash'+ name +" " + title);
//});

var server = app.listen(3000, function(){
  console.log("listing");
});
