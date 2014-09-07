'use strict';
var fs = require('fs');
var test = require('ava');
var getEmails = require('./');

test(function (t) {
	t.plan(1);
	t.assert(getEmails(fs.readFileSync('fixture.txt', 'utf8')).length === 5);
});
