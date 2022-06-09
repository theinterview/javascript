"use strict";

const { printHeader, printSubHeader } = require('./utils');

module.exports = () => {
	printHeader('Lesson: Class');

	class Person {
		constructor(param) {
			const {
				gender = 'Male',
				firstName = 'John',
				lastName = 'Smith',
			} = param || {};

			this.gender = gender;
			this.firstName = firstName;
			this.lastName = lastName;

			this.isMale = this.gender.toUpperCase() === 'MALE';
		}

		printHeOrShe = () => this.isMale ? 'He' : 'She';
		printHisOrHer = () => this.isMale ? 'His' : 'Her';
		printMrOrMrs = () => this.isMale ? 'Mr' : 'Mrs';

		#printFirstName = () => this.firstName;
		#printLastName = () => this.lastName;

		printFullName = () => {
			return `${this.#printFirstName()} ${this.#printLastName()}`;
		}
	};

	class Employee extends Person {
		constructor(param) {
			super(param);
			const {
				jobDepartment,
				jobTitle,
				jobType,
			} = param || {};

			this.jobDepartment = jobDepartment;
			this.jobTitle = jobTitle;
			this.jobType = jobType;
		}

		#printJobDepartment = () => this.jobDepartment;
		#printJobTitle = () => this.jobTitle;
		#printJobType = () => this.jobType;

		printEmployeeAnnouncement = () => {
			return `We are please to announce that a new member has joined our company, ${this.printHisOrHer()} name is ${this.printFullName()} and be working in the ${this.#printJobDepartment()} as a ${this.#printJobTitle()}.`;
		};
	}

	const ZadSole = new Employee({
		gender: 'Male',
		firstName: 'Zad',
		lastName: 'Sole',
		jobTitle: 'Software Developer',				// Required
		jobDepartment: 'IT Development Team',		// Required
	});

	console.log(ZadSole.printEmployeeAnnouncement());
};