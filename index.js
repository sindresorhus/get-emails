import emailRegex from 'email-regex';

const isEmailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?(?:\.[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?)*$/;

export default function getEmails(string) {
	const emails = string.match(emailRegex());
	return new Set(emails ? emails.map(email => email.trim()).filter(email => isEmailRegex.test(email)) : []);
}
