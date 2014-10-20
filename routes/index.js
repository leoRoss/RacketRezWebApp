var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Reservation = mongoose.model('Reservation');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/reservations', function (req, res) {
    Reservation.find({}, function (err, docs) {
        res.json(docs);
    });
});

router.get('/reservations/:owner', function(req, res) {
	if (req.params.owner) {
		Reservation.find({ owner: req.params.owner }, function(err, docs) {
			res.json(docs);
		});
	}
});

router.get('/reservations/:owner/:court', function(req, res) {
	if (req.params.owner) {
		Reservation.find({ owner: req.params.owner, court: req.params.court }, function(err, docs) {
			res.json(docs);
		});
	}
});

module.exports = router;
