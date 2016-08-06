// Your html-routes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.
var path = require('path');

function getHome(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});
};

function getSurvey(app) {
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
};

module.exports.getHome = getHome;
module.exports.getSurvey = getSurvey;