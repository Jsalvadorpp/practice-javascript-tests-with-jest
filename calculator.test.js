const calculator = require('./calculator');

test('sum two numbers', () => {
	expect(calculator.add(2, 5)).toBe(7);
});

test('subtract two number', () => {
	expect(calculator.subtract(2, 5)).toBe(-3);
});

test('divide two number', () => {
	expect(calculator.divide(10, 5)).toBe(2);
});
test('division between zero should return error', () => {
	expect(() => calculator.divide(10, 0)).toThrowError('division between zero is not possible');
});
