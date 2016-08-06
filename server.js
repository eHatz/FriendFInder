// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.text());
app.use(bodyParse.json({type: 'application/vnd.api+json'}));

var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');
htmlRoutes.getHome(app);
htmlRoutes.getSurvey(app);
apiRoutes.postFriends(app);
apiRoutes.getFriends(app);


app.listen(PORT, function () {
	console.log('listening on', PORT);
});	