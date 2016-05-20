var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');

process.env.DATA_DIR = process.env.DATA_DIR || 'data';

process.env.PORT = 8081;
app.set('port',process.env.PORT);

require('./config/express')(app);

// Routing
app.use(require('./routes'));

// Start server
server.listen(app.get('port'), function() {
    console.log(app.get('port'))
  console.info('Server started on port %d serving directory Waiting for requests...', process.env.PORT);
});

module.exports.app = app;
module.exports.server = server;


