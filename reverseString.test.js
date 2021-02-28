const reverseString = require('./reverseString');

test('reserve a string', () => {
	expect(reverseString('somebody')).toBe('ydobemos');
});
