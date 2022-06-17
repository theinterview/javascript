"use strict";

// const static = require('node-static');
const fs = require('fs');
const { createServer } = require('http');
const dataJson = require('./data.json');
const PORT = 8080;

// const file = new static.Server('./public');

module.exports = async () => {
	const cssFile = fs.readFileSync('./public/stylesheet.css');
	const htmlFile = fs.readFileSync('./public/index.html');

	const server = createServer((req, res) => {

		// res.setHeader('Access-Control-Allow-Origin', '*');
		// res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
		// res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
		// req.addListener('end', function () {
		// 	file.serve(req, res);
		// }).resume();

		// LOAD CSS FILE
		if (req.url === '/public/stylesheet.css') {
			req.statusCode = 200;
			res.setHeader('Content-Type', 'text/css');
			res.end(cssFile);
		}

		// LOAD JS FILE
		if (req.url === '/public/script.js') {
			const scriptFile = fs.readFileSync('./public/script.js');

			req.statusCode = 200;
			res.setHeader('Content-Type', 'text/javascript');
			res.end(scriptFile);
		}

		// LOAD DUMMY API JSON FILE
		if (req.url === '/api') {
			req.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');

			// res.end('Hello');
			res.end(JSON.stringify(dataJson));
		}

		if (req.url === '/') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
	
			res.end(htmlFile);
		}

	});


	server.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	})
};
