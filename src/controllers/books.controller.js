const booksController = {};

booksController.renderSettings = (req, res) => {
	res.send('settings');
};
booksController.renderMyBooks = (req, res) => {
	res.send('mybooks');
};

module.exports = booksController;
