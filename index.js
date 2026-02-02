import emailRegex from 'email-regex';

const isEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function getEmails(string) {
	const emails = string.match(emailRegex());
	return new Set(emails ? emails.map(email => email.trim()).filter(email => isEmailRegex.test(email)) : []);
}
