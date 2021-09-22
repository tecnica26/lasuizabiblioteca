const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: { type: String, required: true },
		editorial: { type: String, required: true },
		quantity: { type: Number, required: true },
		imageUrl: { type: String },
		shelf: { type: Number, required: true },
		stars: { type: Number, required: false },
	},
	{
		collection: 'books',
		timestamps: true,
	}
);
module.exports = model('Book', BookSchema);
