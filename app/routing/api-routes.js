// Your api-routes.js file should contain two routes:


var path = require('path');
var friends = require('../data/friends').friendData;

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
function getFriends(app) {
	app.get('/api/friends', function(req, res){
		res.send(friends);
	});
};

// A POST routes /api/friends. This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
function postFriends (app) {
	app.post('/api/friends', function(req, res) {
		var user = req.body;
		var scoreList = [];
		var userScoreArr = user.scores;
		for (var i = 0; i < friends.length; i++) {
			var compatibility = 0;
			var friendScoreArr = friends[i].scores;
			for (var j = 0; j < friendScoreArr.length; j++) {
				var checkQuestions = Math.abs(userScoreArr[j] - friendScoreArr[j]);
				compatibility += checkQuestions;
			};
			scoreList.push(compatibility);
		};
		console.log(scoreList);
		Array.min = function( array ){
			return Math.min.apply( Math, array );
		};
		var minimum = Array.min(scoreList);
		var minIndex = scoreList.indexOf(minimum);
		var bestFriend = friends[minIndex].name;
		console.log(bestFriend);

		friends.push(user);
	});
};


module.exports.getFriends = getFriends;
module.exports.postFriends = postFriends;