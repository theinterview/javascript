"use strict";
const { printHeader, printSubHeader } = require('./utils');
const { users } = require('./data.json');

module.exports = () => {
	printHeader('Lesson: Template Literal & Tag');

	printSubHeader('Tag');

	function horseAge(str, age, dob) {
		console.log({ str, age, dob });
		const [firstStr] = str;
		const ageStr = age > 5 ? 'Old' : 'Young';
		return `${firstStr}|${ageStr}| at |${age}| years with DOB of ${dob}!`;
	}

	const printHorseAge = horseAge`This horse is ${7} somehow, ${'08-09-1970'}`;

	printHorseAge;

};
