"use strict";
const { printHeader, printSubHeader } = require('./utils');
const { users } = require('./data.json');

module.exports = () => {
	printHeader('Lesson: Console');

	/*
	printSubHeader('console.table()');
	const consoleTableUsers = () => {
		// This would be helpful for when we need to find out whereelse is this function being called!!!
		console.trace('Hello, I found you!');

		console.table(users);
	};

	consoleTableUsers();
	consoleTableUsers();
	*/

	printSubHeader('console.*()');
};
