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

	let { users } = JsonData;

	/*
	const shortestUsernameLength = users.reduce((acc, curr) => {
		const usernameLength = curr.username.toString().length;

		if (usernameLength < acc) {
			acc = usernameLength;
		}

		return acc;
	}, users[0].username.toString().length);

	console.log('Shorted username character length =', shortestUsernameLength);
	*/
	// ########################################

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

	// ########################################

	/*
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
	*/

	// ########################################

	// console.table(users);

	printSubHeader('Slice');

	// first arg = starting index (included)
	// last arg = end index (but not included)
	// let slicedUsers = users.slice(1, 3);
	// console.table(slicedUsers);
	let users2 = [...users];
	console.table(users2);
	users2 = users2.slice(1, 3);

	console.table(users2);


	printSubHeader('Splice');

	// console.table(users);
	console.table(users);
	// These 2 vars are redundant because if we pass negative (-) numbers, it starts from the right to left
	const usersLastIndex = users.length - 1;
	const usersSecondToLastIndex = users.length - 2;
	// console.table(users[usersLastIndex]);

	// Splice returns the elements that were deleted
	// let splicedUsers = users.splice(usersSecondToLastIndex, 1);
	// let splicedUsers = users.splice(-3);
	users.splice(-3);

	console.table(users);

	// console.table(splicedUsers);
};
