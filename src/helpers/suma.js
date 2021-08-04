const suma = {};
suma.sumando = (req, res, next) => {
	console.log('Hello World');
	next();
};
module.exports = suma;
