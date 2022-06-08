"use strict";

const { createServer } = require('http');

const { printHeader, printSubHeader } = require('./utils');
const JsonData = require('./data.json');

const HOST_NAME = process.env.HOST_NAME || 'localhost';
const PORT = process.env.PORT || 3000;

module.exports = () => {
	printHeader('Lesson: Basic Node JS Server');


	const server = createServer((req, res) => {
		printSubHeader(`Request`);

		const { url } = req;

		// Boolean, filters out ("", 0, NaN, null, undefined, false)
		const path = url.split('/').filter(Boolean);

		if ((path[0] || '').toLowerCase() === 'api') {
			if ((path[1] || '').toLowerCase() === 'users') {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.parse(JsonData.users));
			}

			if ((path[1] || '').toLowerCase() === 'user') {
				if (JsonData.users.some(x => x.username.toLowerCase() === (path[2] || '').toLowerCase())) {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify(JsonData.users.filter(x => x.username.toLowerCase() === (path[2] || '').toLowerCase())));
				} else {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/plain');
					res.end('No user found!');
				}
			}

			if (path[1] === '' || path[1] == null) {
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/plain');
				res.end('No correct sub-endpoint found!');
			}
		} else {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end('No correct endpoint found!');
		}
	});

	server.listen(PORT, HOST_NAME, () => {
		console.log('Server is running...');
	})
};