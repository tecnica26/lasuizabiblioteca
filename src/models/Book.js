const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: { type: String, required: true },
		editorial: { type: String, required: true },
		quantity: { type: Number, required: true, default: 0 },
		imageUrl: { type: String, required: false },
		shelf: { type: Number, required: true },
		stars: { type: Number, required: false, min: 0 },
	},
	{
		collection: 'books',
		timestamps: true,
	}
);
module.exports = model('Book', BookSchema);
