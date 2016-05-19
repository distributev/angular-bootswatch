var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '../..'));
app.set('views', __dirname + '../../app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: false}));	
app.use(bodyParser.json({limit: '50mb'}));
app.set('port', (process.env.PORT || 5000));


app.all('/*',
		[ function(req, res, next) {
		     res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
		     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
             res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept,Authorization");
		     if (req.method == 'OPTIONS') {
		         res.status(200).end();
		     } 
		     else {
                 next();
		     }
	      }
	    ]
	);

app.get('/', function(req, res) {
  res.render('index.html');
});

require("./routes/index.js")(app);

app.listen(app.get('port'), function () {
	console.log('Started now!');
});


