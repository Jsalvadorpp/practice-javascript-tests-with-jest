const reverseString = (string) => {
	let reverseString = '';

	string.split('').reverse().forEach((word) => {
		reverseString += word;
	});

	return reverseString;
};

module.exports = reverseString;
