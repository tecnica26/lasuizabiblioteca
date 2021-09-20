const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose
	.connect(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then((db) => console.log('Conectado a la base de datos'))
	.catch((err) => console.log(err));
