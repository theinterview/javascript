"use strict";
const { printHeader, printSubHeader } = require('./utils');
const { users } = require('./data.json');

module.exports = () => {
	printHeader('Lesson: Equality');

	/*
	printSubHeader('Compare objects');
	let obj1 = { firstName: 'John', lastName: 'Smith' };
	let obj2 = { ...obj1 }; // <-- Only this is a new object, rest of them are pointing to the same obj reference in the memory
	let obj3 = obj1;
	let obj4 = Object.assign(obj1, { dob: '08-09-1987', lastName: 'Zagoloo' });
	let obj5 = new Object(obj1);

	obj3['firstName'] = 'Farzad';

	console.log('obj1 === obj2', obj1 === obj2);
	console.log('obj1 === obj3', obj1 === obj3);
	console.log('obj1 === obj4', obj1 === obj4);
	console.log('obj1 === obj5', obj1 === obj5);

	console.table({ objectName: 'obj1', ...obj1 });
	console.table({ objectName: 'obj2', ...obj2 });
	console.table({ objectName: 'obj3', ...obj3 });
	console.table({ objectName: 'obj4', ...obj4 });
	console.table({ objectName: 'obj5', ...obj5 });
	*/

	printSubHeader('Compare imperative types e.g. "string", "number", "boolean"');
	let person1 = 'John Smith'
	let person2 = person1;
	let person3 = 'John Smith';
	let person4 = 'john smith';

	console.log(person1 === person2);
	console.log(person1 === person4);
};