const calculator = {
	add: (number1, number2) => {
		return number1 + number2;
	},
	subtract: (number1, number2) => {
		return number1 - number2;
	},
	divide: (number1, number2) => {
		if (number2 == 0) throw new Error('division between zero is not possible');
		return number1 / number2;
	}
};

module.exports = calculator;
