// This function counts down the hours, minutes and seconds based off of a given time

"use strict";

const { printHeader, printSubHeader } = require('../utils');

function timeCountDown(isoDate, timeObject) {
	if (typeof isoDate !== 'string') {
		return {};
	}
	const validTimeObjectProperties = ['hours', 'minutes', 'seconds'];
	const isTimeObjectValid = Object.keys(timeObject).reduce((acc, curr) => {
		if (!validTimeObjectProperties.includes(curr)) {
			acc = false;
		}
		return acc;
	}, true);


	if (!isTimeObjectValid) {
		console.error('Invalid time object!');
	}
	
	const futureDateInMs = new Date(isoDate);
	const currentDateInMs = Date.now();
	const timeUntilFutureInMs = futureDateInMs - currentDateInMs;

	const seconds = Math.floor(timeUntilFutureInMs / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const secondsInASecond = seconds % 60;
	const minutesInAMinute = minutes % 60;

	const result = {
		hours,
		minutes: minutesInAMinute,
		seconds: secondsInASecond,
	};

	const isTimeRemaing = Object.values(result).some(value => value > 0);

	return {
		...result,
		remaining: isTimeRemaing,
	};

}

module.exports = () => {
	printHeader('Component: timeCountDown');

	// const firstInterview = new Date('17 June 2022 12:00 UTC');

	const firstInterview = new Date('16 June 2022 22:05:00 UTC');
	const firstInterviewIso = firstInterview.toISOString();

	const interval = setInterval(() => {
		const timer = timeCountDown(firstInterviewIso, {
			hours: 0,
			minutes: 0,
			seconds: 0,
		});
		
		if (!timer.remaining) {
			clearInterval(interval);
		} else {
			console.log(timer);
		}
	}, 1000);
};
