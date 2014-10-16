var mongoose = require('mongoose')

var ReservationSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	owner: String,
	start: Date,
	court: Number,
	guests: [String],
	rackets: Number,
	ball: Number,
	goggles: Number,
});

var Reservation = mongoose.model('reservations', ReservationSchema);
