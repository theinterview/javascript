(async () => {
	const root = await document.querySelector('#root');
	
	const data = await fetch('https://jsonplaceholder.typicode.com/posts');

	try {
		// root.innerHTML = `My GitHub account is located at ${data.url}.`;
		console.log(data);
	} catch (error) {
		console.log(error);
	}

	// try {
	// 	root.innerHTML = data;
	// } catch (error) {
	// 	console.log('There was an error');
	// }
	// console.log(data);
})();
