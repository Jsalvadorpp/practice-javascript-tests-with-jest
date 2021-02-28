const arrayAnalysis = (array) => {
	let analysis = {};

	let average = array.reduce((a, b) => a + b, 0) / array.length;
	analysis.average = average;

	let min = array.sort((a, b) => a - b)[0];
	analysis.min = min;

	let max = array.sort((a, b) => b - a)[0];
	analysis.max = max;

	analysis.length = array.length;

	return analysis;
};

module.exports = arrayAnalysis;
