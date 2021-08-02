const app = require('./server');

app.listen(app.get('port'), () =>
	console.log('Conectado al puerto ', app.get('port'))
);
