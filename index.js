'use strict';
const emailRegex = require('email-regex');

module.exports = input => {
	const emails = input.match(emailRegex());
	return new Set(emails ? emails.map(x => x.trim()) : []);
};
