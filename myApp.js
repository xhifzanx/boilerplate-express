require('dotenv').config() 
let express = require('express');
let app = express();
let absolute_path = __dirname + "/views/index.html"
app.use('/public', express.static(__dirname + "/public"));
app.get('/', function(req, res) {
  res.sendFile(absolute_path)
})

app.use('/json',function(req, res, next) {
	var string = req.method + " " + req.path + " - " + req.ip;
	console.log(string)
	next()
})

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
	  response = "Hello json".toUpperCase();
	} else {
	  response = "Hello json";
	}
  res.json({ "message": response })
})

app.get('/now', function(req, res, next){
	req.time = new Date().toString()
	next()
}, function(req, res) {
	res.json({time: req.time})
} )

app.get('/:word/echo', function(req, res) {
	var word = req.params.word
	res.json({echo: word})
})

app.get('/name', function(req, res) {
	var name = req.query.firstname + req.query.lastname
	res.json({"name": name})
})

































module.exports = app;
