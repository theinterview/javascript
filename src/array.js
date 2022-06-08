"use strict";

const { printHeader, printSubHeader } = require('./utils');
const JsonData = require('./data.json');

module.exports = () => {
	printHeader('Lesson: Array');

	/*
	// Sort by
	printSubHeader('Sort: Sort users by username in ascending order');

	const arraySortString = (arr, property, ascending = true) => (arr || []).sort((a, b) => {
		if (!ascending) {
			return b[property] < a[property] ? -1 : 1;
		}
		return a[property] < b[property] ? -1 : 1;
	});

	const sortByUsernameAsc = arraySortString(JsonData.users, 'username');
	const sortByUsernameDesc = arraySortString(JsonData.users, 'username', false);

	console.log('// Ascending');
	console.log(sortByUsernameAsc);

	console.log('// Descending');
	console.log(sortByUsernameDesc);
	*/

	// Reduce
	printSubHeader('Reduce: Get total balance for all users\' debit and credit');

	/*
	const totalUsersBalance = JsonData.users.reduce((acc, curr) => {
		const balance = Number(curr.debit) - Number(curr.credit);
		return acc + balance;
	}, 0);

	console.log('Total users\' balance =', totalUsersBalance);
	*/

	const { users } = JsonData;

	const shortestUsernameLength = users.reduce((acc, curr) => {
		const usernameLength = curr.username.toString().length;

		if (usernameLength < acc) {
			acc = usernameLength;
		}

		return acc;
	}, users[0].username.toString().length);

	console.log('Shorted username character length =', shortestUsernameLength);

	// Return an object with 2 properties, "active" and "inactive" counts for all users
	// const usersActiveAndInactiveCounts = users.reduce((acc, curr) => {
	// 	const active = curr.active === "1";

	// 	if (active) {
	// 		// If active property already exists in accumulator object
	// 		if (acc['active']) {
	// 			acc['active'] += 1;
	// 		// if it doesn't
	// 		} else {
	// 			acc['active'] = 1;
	// 		}
	// 	} else {
	// 		// If inactive property already exists in accumulator object
	// 		if (acc['inactive']) {
	// 			acc['inactive'] += 1;
	// 		// if it doesn't
	// 		} else {
	// 			acc['inactive'] = 1;
	// 		}
	// 	}

	// 	return acc;
	// }, {});

	// Same result as above, but more readable and less code
	const usersActiveAndInactiveCounts = users.reduce((acc, curr) => {
		const active = curr.active === "1";

		if (active) {
			acc['active'] += 1;
		} else {
			acc['inactive'] += 1;
		}

		return acc;
	}, { active: 0, inactive: 0 });

	console.log('Users active/inactive counts =', usersActiveAndInactiveCounts);

};
