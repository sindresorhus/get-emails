'use strict';
const emailRegex = require('email-regex');

module.exports = string => {
	const emails = string.match(emailRegex());
	return new Set(emails ? emails.map(email => email.trim()) : []);
};
