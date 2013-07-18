var express = require('express');
var routes = require('./app/controllers');
var views = require('./app/views');

var app = express.createServer(express.logger());

app.use(app.router);
app.get('/', routes.index);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
