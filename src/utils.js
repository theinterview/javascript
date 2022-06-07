const printHeader = (str, char = '~', charLength = 40) => {
	let charLine = '';

	for (let i = 0; i < charLength; i += 1) {
		charLine += char;
	}

	console.log(`${charLine}\n${str}\n${charLine}\n`);
};

const printSubHeader = (str) => printHeader(str, '-', 20);

module.exports = {
	printHeader,
	printSubHeader,
};