/**
Get all email addresses in a string.

@example
```
import getEmails from 'get-emails';

const text = 'Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

getEmails(text);
//=> Set {'sindresorhus@gmail.com', 'unicorn@rainbow.cake'}
```
*/
export default function getEmails(string: string): Set<string>;
