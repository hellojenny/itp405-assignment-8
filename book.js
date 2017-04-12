var bookshelf = require('./bookshelf.js');
var Author = require('./author');
var Publisher = require('./publisher');

var Book = bookshelf.Model.extend({
	tableName: 'books',
	publisher: function() {
		return this.belongsTo(Publisher);
	},
	author: function() {
		return this.belongsTo(Author);
	}
});

module.exports = Book;