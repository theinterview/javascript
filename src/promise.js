"use strict";

const fs = require('fs');
const { printHeader, printSubHeader } = require('./utils');

module.exports = () => {
	const randomNumber = Math.floor(Math.random() * 4);

	printHeader('Lesson: Promise');

	/*
	// setTimeout
	printSubHeader('setTimeout');
	setTimeout(() => {
		console.log('This should print after 1 sec.');
	}, 1000);

	// Nested setTimeout
	setTimeout(() => {
		console.log('This should print after 1 sec.');
		setTimeout(() => {
			console.log('This should print after 2 sec.');
			setTimeout(() => {
				console.log('This should print after 3 sec.');
			}, 1000);
		}, 1000);
	}, 1000);
	*/


	/*
	printSubHeader('promise');

	const lotteryTicket = new Promise((resolve, reject) => {
		if (randomNumber === 0) {
			reject(randomNumber);
		} else {
			resolve(randomNumber);
		}
	});

	lotteryTicket
		.then((number) => {
			console.error(`Successful :D - Your lottery number is ${number}`);
		})
		.catch((number) => {
			console.error(`Unsuccessful :( - Your lottery number is ${number}`);
		})
		.finally(() => {
			console.log('Finished!');
		});
	*/

	/*
	printSubHeader('async await');

	const lotteryTicket = async () => {
		const number = await randomNumber;

		if (number === 0) {
			console.error(`Unsuccessful :( - Your lottery number is = ${number}`);
		} else {
			console.error(`Successful :D - Your lottery number is = ${number}`);
		}
	};

	lotteryTicket();
	*/


	printSubHeader('try catch');
	
	const readFromFile = async () => {
		
		try {
			const data = await fs.promises.readFile('./src/data.txt', {
				encoding: 'utf-8'
			});

			console.log(data);
		} catch (err) {
			console.error(err);
		}
	};

	readFromFile();

	// https://www.youtube.com/watch?v=7m9EiRS_Kc0&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT&index=3
};
