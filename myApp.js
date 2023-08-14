let express = require('express');
let app = express();
let absolute_path = __dirname + "/views/index.html"
let public_path = __dirname + "/public"

app.get('/', function(req, res) {
  res.sendFile(absolute_path)
})

app.use(express.static(public_path))

































module.exports = app;
