import fs from 'fs';
import test from 'ava';
import m from '.';

// Fix Babel on Node.js 4
const Set = global.Set;

test('main', t => {
	t.deepEqual(
		m(fs.readFileSync('fixture.txt', 'utf8')),
		new Set([
			'sindresorhus@gmail.com',
			'foo@bar.co.uk',
			'unicorn@unicorn.unicorn',
			'cake@cake.cake',
			'pony@power.com'
		])
	);
});

test('matches correctly', t => {
	const fixture = `
		foo bar mailto:sindresorhus@gmail.com unicorn
	`;

	t.deepEqual(
		m(fixture),
		new Set([
			'sindresorhus@gmail.com'
		])
	);
});
