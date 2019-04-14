
/**
Get all email addresses in a string.

@example
```
import getEmails = require('get-emails');

const text = 'Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

getEmails(text);
//=> Set {'sindresorhus@gmail.com', 'unicorn@rainbow.cake'}
```
*/
declare function getEmails(text: string): Set<string>;

export = getEmails;
