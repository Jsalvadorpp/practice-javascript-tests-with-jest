const capitalize = require('./capitalize');

test('return first character of the string capitalized', () => {
	expect(capitalize('hello')).toBe('Hello');
});
