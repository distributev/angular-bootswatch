var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');

process.env.PORT = process.env.PORT || 5000;
// process.env.DATA_DIR = process.env.DATA_DIR || 'data';

// try {
//   fs.accessSync(process.env.DATA_DIR, fs.R_OK | fs.X_OK);
// } catch(err) {
//   console.error('Cannot access directory %s. Maybe it does not exist?. Please specify a valid data directory by using the environment variable DATA_DIR.', process.env.DATA_DIR);
//   process.exit(1);
// }

// var dataDirStats = fs.statSync(process.env.DATA_DIR);
// if(!dataDirStats.isDirectory()) {
//   console.error('%s is not a directory. Please specify a valid data directory by using the environment variable DATA_DIR.', process.env.DATA_DIR);
//   process.exit(1);
// }



require('./config/express')(app);

// Routing
app.use(require('./routes'));

// Start server
server.listen(5000, function() {
  console.info('Server started on port %d serving directory Waiting for requests...', process.env.PORT);
});

module.exports.app = app;
module.exports.server = server;


