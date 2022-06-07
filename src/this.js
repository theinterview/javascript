"use strict";
console.log('\n\n\n\n');

class ExampleComp {
	constructor(param) {
		const {
			name = 'Default name',
			cost = 1_000_000,
		} = param || {};

		this.compName = name;
		this.cost = cost;
	}

	#sayButtonName = () => {
		console.log('this button name is', this.compName);
	}

	// # means private, so could only be called internally
	#printCost = () => {
		console.log(`the cost has accumulated to about £${this.cost}`);
	}

	init() {
		this.#sayButtonName();
		this.#printCost();
		console.log(this);
	}
}

// myButtonComp;
// myButtonComp.init();



module.exports = () => {
	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
	console.log('Lesson: "this"');
	console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

	const myButtonComp = new ExampleComp();

	myButtonComp.init();

	this.farzad = 'Farzad sole';

	console.log('this inside module.exports =', this);

	// console.log('this =', this);
	
	
	let obj = {
		name: '*~@ Crazy Obj :)',
		sayHello: function() {
			console.log();
			console.log('////////// sayHello() \\\\\\\\\\\\\\\\\\\\');
			console.log('this =', this);
			console.log(`This obj name is = ${this.name}`);
		},
		sayGoodbye: () => {
			console.log();
			console.log('////////// sayGoodbye() \\\\\\\\\\\\\\\\\\\\');
			console.log('this =', this);
			console.log(`This obj name is = ${this.name}`);
		},
	};
	
	// const sayHelloConst = obj.sayHello;
	// sayHelloConst();
	
	obj.sayHello();
	obj.sayGoodbye();
};

