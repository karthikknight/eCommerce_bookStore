var mongoose=require('mongoose');


// books schema
var bookSchema=mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String,
		required: true
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book=module.exports= mongoose.model('Book', bookSchema);

//get Books
module.exports.getBooks= function(callback, limit){
	Book.find(callback).limit(limit);
}

//get Book
module.exports.getBookById= function(id, callback){
	Book.findById(id, callback);
}

//add book
module.exports.addBook= function(book, callback){
	Book.create(book, callback);
}

//delete book
module.exports.removeBook= function(id, callback){
	var query={_id: id};
	Book.remove(query, callback);
}