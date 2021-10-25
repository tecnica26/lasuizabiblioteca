const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: { type: String, required: true },
		editorial: { type: String, required: true },
		quantity: {
			type: Number,
			default: 1,
			min: 0,
		},
		imageUrl: { type: String, required: false },
		shelf: { type: Number, required: true },
		stars: { type: Number, required: false, min: 0, default: 1 },
	},
	{
		collection: 'books',
		timestamps: true,
	}
);
module.exports = model('Book', BookSchema);
