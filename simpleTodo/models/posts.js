var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
});

mongoose.model('Post', PostSchema);