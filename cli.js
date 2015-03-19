#!/usr/bin/env node
'use strict';
var fs = require('fs');
var stdin = require('get-stdin');
var meow = require('meow');
var getEmails = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ get-emails <file>',
		'  $ cat <file> | get-emails'
	].join('\n')
});

function init(data) {
	console.log(getEmails(data).join('\n'));
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('File required');
		process.exit(1);
	}

	init(fs.readFileSync(cli.input[0], 'utf8'));
} else {
	stdin(init);
}
