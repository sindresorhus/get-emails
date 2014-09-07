'use strict';
var arrayUniq = require('array-uniq');
var emailRegex = require('email-regex');

module.exports = function (str) {
	var emails = str.match(emailRegex());

	return emails ? arrayUniq(emails.map(function (el) {
		return el.trim();
	})) : [];
};
