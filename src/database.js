const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
mongoose
	.connect(uri, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then((db) => console.log('Conectado a la base de datos'))
	.catch((err) => console.log(err));
