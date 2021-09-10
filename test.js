import fs from 'node:fs';
import test from 'ava';
import getEmails from './index.js';

test('main', t => {
	t.deepEqual(
		getEmails(fs.readFileSync('fixture.txt', 'utf8')),
		new Set([
			'sindresorhus@gmail.com',
			'foo@bar.co.uk',
			'unicorn@unicorn.unicorn',
			'cake@cake.cake',
			'pony@power.com',
		]),
	);
});

test('matches correctly', t => {
	const fixture = `
		foo bar mailto:sindresorhus@gmail.com unicorn
	`;

	t.deepEqual(
		getEmails(fixture),
		new Set([
			'sindresorhus@gmail.com',
		]),
	);
});
