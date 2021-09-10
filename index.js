import emailRegex from 'email-regex';

export default function getEmails(string) {
	const emails = string.match(emailRegex());
	return new Set(emails ? emails.map(email => email.trim()) : []);
}
