const arrayAnalysis = require('./arrayAnalysis');

let arr = [ 1, 8, 3, 4, 2, 6 ];
let object = {
	average: 4,
	min: 1,
	max: 8,
	length: 6
};

test('return average', () => {
	expect(arrayAnalysis(arr)).toMatchObject({ average: 4 });
});

test('return min', () => {
	expect(arrayAnalysis(arr)).toMatchObject({ min: 1 });
});

test('return max', () => {
	expect(arrayAnalysis(arr)).toMatchObject({ max: 8 });
});

test('return lenght', () => {
	expect(arrayAnalysis(arr)).toMatchObject({ length: 6 });
});

test('return all analysis', () => {
	expect(arrayAnalysis(arr)).toEqual(object);
});
