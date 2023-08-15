require('dotenv').config() 
let express = require('express');
let app = express();
let absolute_path = __dirname + "/views/index.html"
app.use('/public', express.static(__dirname + "/public"));
app.get('/', function(req, res) {
  res.sendFile(absolute_path)
})

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
	  response = "Hello Json".toUpperCase();
	} else {
	  response = "Hello Json";
	}
  res.json({ "message": response })
})



































module.exports = app;
