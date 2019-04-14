'use strict';
const emailRegex = require('email-regex');

module.exports = text => {
	const emails = text.match(emailRegex());
	return new Set(emails ? emails.map(x => x.trim()) : []);
};
