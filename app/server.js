var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

var port = Number(process.env.PORT || 8080);

app.listen(port, function(){
	console.log ('server listening on port 8080');
});