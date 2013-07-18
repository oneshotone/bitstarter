var express = require('express');
var routes = require('./routes');

var app = express();

app.use(app.router);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.bodyParser);
app.use(express.methodOverride);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
