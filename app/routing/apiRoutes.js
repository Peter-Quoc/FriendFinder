var path = require('path');
var friendData = require("../data/friend");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function (req, res) {
    var bestMatch;
    var initialTotalDifference = 0;

    friendArray.forEach(function (req, res) {
      var difference = 0;
      for (var i = 0; i < friend.scores.length; i++) {
        if (parseInt(req.body.scores[i]) != parseInt(friend.scores[i])) {
          difference += Math.abs(parseInt(req.body.scores[i]) + parseInt(friend.scores[i]));
        }
      }

      if (difference < initialTotalDifference) {
        closestMatch = friend;
        initialTotalDifference = difference;
      } else if (initialTotalDifference === 0) {
        closestMatch = friend;
        initialTotalDifference = difference;
      }
    });

    Friends.push(req.body);
    res.send(closestMatch);
  });

  app.post("/api/clear", function () {
    friendData = [];
    console.log(tableData);
  });
};