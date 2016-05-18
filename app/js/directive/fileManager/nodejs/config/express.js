var express = require('express');
var bodyParser = require('body-parser');
var timeout = require('connect-timeout');
var cors = require('cors');
var morgan = require('morgan');

/**
 * Express configuration
 */
module.exports = function(app) {
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(timeout('5s'));
	app.use(cors());
};