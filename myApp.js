let express = require('express');
let app = express();
let absolute_path = __dirname + "/views/index.html"
app.use('/public', express.static(__dirname + "/public"));
app.get('/', function(req, res) {
  res.sendFile(absolute_path)
})

app.get('/json', function(req, res) {
  res.json({ "message": "Hello json" })
})



































module.exports = app;
